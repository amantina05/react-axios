import axios from 'axios';
import apiURL from './api';

export function getCustomerList() {
  //make the axios call using get
  //in the callback return the data from response
  return axios.get(apiURL).then(response => response.data);
}

export const postCustomer = function(customer) {
  return axios.post(apiURL, customer).then(response => {
    return response.data;
  });
};
