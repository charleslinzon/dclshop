import axios from "axios";

const api = axios.create({
    baseUrl : 'http://localhost:5000/admin/api'
})

export default api