import Axios from "axios";
import { stringify } from "qs";

function createAxios() {
    const axios = Axios.create();

    axios.defaults.baseURL = process.env.API_URL;
    axios.defaults.headers.common["Content-Type"] = "application/json";
    axios.defaults.timeout = 2*60*1000; // 2 minutes

    return axios;
}

// Initialise Axios
const api = createAxios();

const service = {
    get(route, query = {}, options = {}) {
        return api.get(`${route}?${stringify(query)}`, options);
    },
    post(route, payload = {}, options = {}) {
        return api.post(route, payload, options);
    },
};

export default service;
