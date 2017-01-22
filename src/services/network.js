import axios from 'axios'
import {constants} from 'services'

axios.interceptors.request.use(config => {
  if (config.method === 'options') return config
  config.headers.Authorization = constants.authToken
  config.url = `http://${constants.customerName}.podium.co${config.url}`
  return config
})
