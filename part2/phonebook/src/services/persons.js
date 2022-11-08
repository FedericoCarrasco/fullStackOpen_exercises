import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const service = {}

service.getAll = () => {
    return axios.get(baseUrl)
}

service.create = newObject => {
    return axios.post(baseUrl, newObject)
}

service.update = (id, newObject) => {
    return axios.put(`${baseUrl}/${id}`, newObject)
}

service.deleteById = id => {
    return axios.delete(`${baseUrl}/${id}`)
}

export default service