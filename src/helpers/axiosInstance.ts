import axios from 'axios'

export default axios.create({
    baseURL: process.env.VUE_APP_APIHOST,
    timeout: 5000,
    headers: {
        'Authorization': "Bearer TOKEN",
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache',
        'accept': 'application/json',
    },
})
