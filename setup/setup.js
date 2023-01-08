var config = require('../config'),
    rp = require('request-promise');
    fs = require('fs'),
    colors = require('colors');

const handleError = (err) => {
  if (err.error &&
      err.error.errorResponse &&
      err.error.errorResponse.message) {
    console.log('Error: '.red + err.error.errorResponse.message.red);
  } else {
    console.log(JSON.stringify(err, null, 2));
  }
}

const createDatabase = async (name) => {
  const options = {
    method: 'POST',
    uri: 'http://' + config.host + ':8002/manage/v2/databases',
    body: {
      "database-name": name
    },
    json: true,
    headers: {
      'Content-Type': 'application/json'
    },
    auth: config.auth
  };
  try {
    const response = await rp(options);
    console.log('Database created: '.green + name);
  } catch (error) {
    handleError(error);
  }
}

const getHost = async () => {
  const options = {
    method: 'GET',
    uri: 'http://' + config.host + ':8002/manage/v2/hosts',
    json: true,
    headers: {
      'Content-Type': 'application/json'
    },
    auth: config.auth
  };
  try {
    const response = await rp(options);
    return response['host-default-list']['list-items']['list-item'][0].nameref;
  } catch (error) {
    handleError(error);
  }
}

const createForest = async (name) => {
  let hostName = await getHost();
  const options = {
    method: 'POST',
    uri: 'http://' + config.host + ':8002/manage/v2/forests',
    body: {
      "forest-name": name + '-1',
      "database": name,
      "host": hostName
    },
    json: true,
    headers: {
      'Content-Type': 'application/json'
    },
    auth: config.auth
  };
  try {
    const response = await rp(options);
    console.log('Forest created and attached: '.green + name + '-1');
  } catch (error) {
    handleError(error);
  }
}

const createREST = async () => {
  const options = {
    method: 'POST',
    uri: 'http://' + config.host + ':8002/v1/rest-apis',
    body: config.rest,
    json: true,
    headers: {
      'Content-Type': 'application/json'
    },
    auth: config.auth
  };
  try {
    const response = await rp(options);
    console.log('REST instance created at port: '.green + config.rest["rest-api"].port);
  } catch (err) {
    if (err.statusCode === 400) {
      console.error("REST instance already exists at port: ".red + config.rest["rest-api"].port);
    } else {
      handleError(error);
    }
  }
}

const setRESTAuth = async () => {
  const options = {
    method: 'PUT',
    uri: 'http://' + config.host + ':8002/manage/v2/servers/' + config.rest["rest-api"].name + '/properties?group-id=Default&format=json',
    body: {"authentication": "basic"},
    json: true,
    headers: {
      'Content-Type': 'application/json'
    },
    auth: config.auth
  };
  try {
    const response = await rp(options);
    console.log('REST authentication set: '.green + "basic");
  } catch (error) {
    handleError(error);
  }
}

const createXDBC = async () => {
  var options = {
    method: 'POST',
    uri: 'http://' + config.host + ':8002/manage/v2/servers?format=json',
    body: config.xdbc,
    json: true,
    headers: {
      'Content-Type': 'application/json'
    },
    auth: config.auth
  };
  try {
    const response = await rp(options);
    console.log('XDBC server created at port:   '.green + config.xdbc.port);
  } catch (error) {
    handleError(error);
  }
}

const createRole = async () => {
  var options = {
    method: 'POST',
    uri: 'http://' + config.host + ':8002/manage/v2/roles?format=json',
    body: config.role,
    json: true,
    headers: {
      'Content-Type': 'application/json'
    },
    auth: config.auth
  };
  try {
    const response = await rp(options);
    console.log('Role created: '.green + config.role["role-name"]);
  } catch (error) {
    handleError(error);
  }
}

const createUser = async () => {
  var options = {
    method: 'POST',
    uri: 'http://' + config.host + ':8002/manage/v2/users?format=json',
    body: config.user,
    json: true,
    headers: {
      'Content-Type': 'application/json'
    },
    auth: config.auth
  };
  try {
    const response = await rp(options);
    console.log('User created: '.green + config.user["user-name"]);
  } catch (err) {
    if (err.statusCode === 400) {
      console.error("User already exists: ".red + config.user["user-name"])
    } else {
      console.error(err);
    }
  }
}

const loadRecords = async () => {
  // Cycle through documents config 
  config.documents.forEach(async doc => {
    let inputPath = config.path + 'setup/input/' + (doc.path + '/' || '');
    recordFiles = fs.readdirSync(inputPath),
    count = 0;
    Promise.all([recordFiles.map(file => {
      let buffer;
      buffer = fs.readFileSync(inputPath + file);
      let url = 'http://' + config.host + ':' + config.rest["rest-api"].port + '/v1/documents';
      let db = '?database=' + config.databases.content.name;
      let uri = '&uri=/' + doc.collection + '/' + file;
      let coll = '&collection=' + doc.collection;
      // let perms = "&perm:rest-writer=read&perm:rest-writer=update&perm:rest-reader=update&perm:rest-admin=read&perm:rest-admin=update&perm:rest-admin=execute&perm:harmonized-reader=read&perm:harmonized-updater=update";
      let perms = "&perm:rest-writer=read";
      const options = {
        method: 'PUT',
        uri: url + db + uri + coll + perms,
        body: buffer,
        auth: config.auth
      };
      return rp(options).then(response => {
        console.log(('Record loaded: ').green + '/' + doc.collection + '/' + file);
      }, err => {
        console.error(err);
      });
    })]);
  })
}

const loadSearchOptions = async () => {
  let currFile = config.path + 'setup/search-options.xml';
  let buffer = fs.readFileSync(currFile);

  let bufferString = buffer.toString().replace("%%ENTITYTYPE%%", config.entityType);
  
  let url = 'http://' + config.host + ':' + config.rest["rest-api"].port + '/v1/config/query/search-options';

  const options = {
    method: 'POST',
    uri: url, // + db+ uri + perms,
    body: bufferString,
    auth: config.auth,
    headers: {
      'Content-Type': 'application/xml'
    },
  };
  try {
    const response = await rp(options);
    console.log('Module loaded: '.green + '/v1/config/query/search-options');
  } catch (err) {
    if (err.statusCode === 400) {
      console.error("Module already exists: ".red + config.user["user-name"])
    } else {
      console.error(err);
    }
  }
}

const start = async () => {
  console.log(
    '                            SETUP STARTED                             '.gray.bold.inverse
  );
  await createDatabase(config.databases.content.name);
  await createDatabase(config.databases.modules.name);
  await createForest(config.databases.content.name);
  await createForest(config.databases.modules.name);
  await createREST();
  await setRESTAuth();
  await createXDBC();
  await createRole();
  await createUser();
  console.log('Loading data...'.green);
  await Promise.all([
    loadRecords(),
    loadSearchOptions()
  ]);
  console.log(
      '                            SETUP FINISHED                            '.gray.bold.inverse
  );
}

start();
