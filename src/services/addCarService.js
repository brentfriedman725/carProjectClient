import axios from 'axios';
const API_URL = 'https://car-project-server.herokuapp.com/graphql';

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