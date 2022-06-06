import axios from 'axios';
import authHeader from './authHeader';
const API_URL = 'http://localhost:8000/car/details';

class DetailService {
  getMakes() {
    return axios.get(API_URL + '?cmd=getMakes', { headers: authHeader() });
  }
  getModels(make) {
    return axios.get(API_URL + '?cmd=getModels&make=' + make, { headers: authHeader() });
  }
  getTrim(make, model) {
    return axios.get(API_URL + '?cmd=getTrims&make=' + make + '&model=' + model, { headers: authHeader() });
  }
  getResults(make, model, trim) {
      return axios.get(API_URL + '?make=' + make + '&model=' + model + '&trim=' + trim, { headers: authHeader() });
  }
}
export default new DetailService();