import axios from "../../plugins/axios";

export default class CardsService {
  get(id) {
    return axios.get(`Card/${id}/list`);
  }

  post(payload) {
    return axios.post(`/Card`, payload);
  }

  delete(id) {
    return axios.delete(`/Card/${id}`);
  }
}
