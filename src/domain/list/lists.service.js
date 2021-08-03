import axios from "../../plugins/axios";

export default class ListsService {
  get() {
    return axios.get("/List");
  }
}
