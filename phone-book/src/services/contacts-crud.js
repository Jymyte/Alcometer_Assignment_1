import axios from 'axios'
const baseUrl = 'http://localhost:3001/contacts'

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then((response) => response.data) 
}

const push = (newNumber) => {
  const request = axios.post(baseUrl, newNumber)
  return request.then((response) => response.data)
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {getAll, push}
