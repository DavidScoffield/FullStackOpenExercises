import axios from 'axios'

const baseUrl = 'http://localhost:3001/api/persons'

const create = (newObject) => {
  const request = axios.post(baseUrl, newObject)
  return request.then((response) => response.data)
}

const all = () => {
  const request = axios.get(baseUrl)
  return request.then((response) => response.data)
}

const deleteNum = (id) => {
  const url = `${baseUrl}/${id}`
  return axios.delete(url)
}

export default { create, deleteNum, all }
