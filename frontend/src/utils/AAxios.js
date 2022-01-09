import axios from 'axios'

const ITAxios = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/'
})

export default ITAxios