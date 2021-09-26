import axios from 'axios'

export default axios.create({
    baseURL: "http://localhost:8000",
    timeout: 5000,
    headers: {
        'Authorization': "Bearer TOKEN",
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache',
        'accept': 'application/json',
    },
})
