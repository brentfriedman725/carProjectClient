import axios from 'axios';
import authHeader from './authHeader';
const API_URL = 'http://localhost:8000/api/';
class UserService {
  getPublicContent() {
    return axios.get(API_URL + 'all');
  }
  getCarsInit() {
    return axios.get(API_URL + 'cars', { headers: authHeader() });
  }
  getAdminBoard() {
    return axios.get(API_URL + 'carsadd', { headers: authHeader() });
  }
}
export default new UserService();