import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 4b1650f11c375acd651e0c48e65e6f46a6b3878861792eaa4fb43b238c6676f9'
    }
})
