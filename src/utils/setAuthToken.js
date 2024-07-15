import axios from 'axios'
import AuthHTTP from './httpClient';

const setAuthToken = token => {
  if (token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common.Authorization;
  }
};

export const setAuthTokenHTTP  = token => {
  if (token) {
    AuthHTTP.defaults.headers.common.Authorization =`Bearer ${token}`;
  } else { 
    delete AuthHTTP.defaults.headers.common.Authorization;
  }
};

export default setAuthToken;
