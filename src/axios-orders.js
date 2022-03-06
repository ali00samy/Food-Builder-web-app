import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-f06e8-default-rtdb.firebaseio.com/'
});

export default instance;