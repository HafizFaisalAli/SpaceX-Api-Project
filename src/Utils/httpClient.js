import axios from 'axios'

const Client = axios.create({
    baseURL: 'https://api.spacexdata.com/v4'
});

export default Client ;