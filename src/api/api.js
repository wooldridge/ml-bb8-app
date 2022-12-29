// import axios from "axios";
import _ from "lodash";

// Static data to be replaced database docs
import personJSON from '../data/person-1001.json';
import locationJSON from '../data/militaryBase-1.json';
import convoyJSON from '../data/convoy-1.json';
import requestsJSON from '../data/requests.json';

export const getPerson = () => { 
  return personJSON;
  // try {
  //   const response = await axios.post(endpoint, query, config);
  //   if (response && response.status === 200) {
  //     return response;
  //   }
  // } catch (error) {
  //   let message = error;
  //   console.error("Error: getSearchResults", message);
  // }
};

export const getLocation = () => { 
  return locationJSON;
};

export const getConvoy = () => {
  return convoyJSON;
};

export const getRequests = () => {
  return requestsJSON;
};
