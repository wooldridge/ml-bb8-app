import axios from "axios";

// Static data to be replaced database docs
import convoyJSON from '../data/convoy-1.json';
import requestsJSON from '../data/requests.json';

export const getDocument = async (id, collection) => { 
  const endpoint = 'http://localhost:4000/v1/documents?uri=/' + collection + '/' + id + '.json';
  try {
    const response = await axios.get(endpoint);
    if (response && response.status === 200) {
      return response.data;
    }
  } catch (error) {
    let message = error;
    console.error("Error: getDocument", message);
  }
};

export const getRequests = () => {
  return requestsJSON;
};
