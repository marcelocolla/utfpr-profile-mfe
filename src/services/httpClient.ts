import axios from 'axios'

const httpClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL || '/',
  headers: {
    'X-App-Origin': 'boilerplate-mfe',
  },
})

export default httpClient
