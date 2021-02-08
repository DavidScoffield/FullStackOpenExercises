import axios from 'axios'

const baseUrl = '/api/persons'

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

const updateNum = ({ id, newObject }) => {
  const url = `${baseUrl}/${id}`
  const request = axios.put(url, newObject)
  return request.then((response) => response.data)
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { create, deleteNum, all, updateNum }
