# ml-bb8-app

## Requirements

- MarkLogic Server
- Node.js and npm

## Setup

1. Copy `config_sample.js` and save as `config.js` in project root.

2. Edit `config.js` for your environment. At a minimum, edit `config.path` to point to your project and `config.auth` for your MarkLogic Server.

3. In a new terminal, install the project dependencies using npm:
```
cd ml-bb8-app
npm install
```

3. Run the `setup.js` script:
```
cd setup
node setup.js
```
This will set up your MarkLogic Server (create databases, a REST server, a user, etc.) and load the application documents. 

After setup, you can view your MarkLogic Server configuration in the Admin UI (http://localhost:8001) and the loaded documents in Query Console (http://localhost:8000/qconsole).

## Run the application 

1. Run the proxy server, which is the middle tier between the UI and the MarkLogic Server:
```
cd ../server
node proxy.js
```

2. In a new terminal, run the UI:
```
cd ml-bb8-app
npm start
```

3. Open the UI in your browser: http://localhost:3000
