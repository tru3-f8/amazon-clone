import axios from 'axios';

const instance = axios.create({
    // baseURL: 'http://localhost:5001/clone-f2b6d/us-central1/api' //API URL
    baseURL: 'https://us-central1-clone-f2b6d.cloudfunctions.net/api'
});

export default instance;

