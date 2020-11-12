import axios from 'axios';


export default {
  create(args) {
    return axios.post(`/api/v1/announcement`, args).then((reponse) => reponse.data)
  },
  active() {
    return axios.get(`/api/v1/announcement`).then((reponse) => reponse.data)
  },
}
