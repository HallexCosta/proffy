import axios from 'axios'

const api = axios.create({
  baseURL: 'http://172.24.33.236:3333'
})

export default api