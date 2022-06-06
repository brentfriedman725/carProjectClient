import axios from 'axios';
const API_URL = 'http://localhost:8000/graphql';

class AddCarService {
  makeCar(input) {
    console.log(input);
    return axios({
        url: API_URL,
        method: 'post',
        data: input
    })
  }
}
export default new AddCarService();