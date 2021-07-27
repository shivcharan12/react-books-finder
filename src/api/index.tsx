import axios from "axios";

const api = axios.create({
    baseURL: 'http://nyx.vima.ekt.gr:3000'
});

export default api;