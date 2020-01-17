import Axios from 'axios'
 
//localhost:3025

const axios = Axios.create({
    baseURL: 'http://localhost:3025'
})

export default axios