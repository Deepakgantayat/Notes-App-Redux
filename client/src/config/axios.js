import Axios from 'axios'
 
//localhost:3025

const axios = Axios.create({
    baseURL: '/'
})

export default axios