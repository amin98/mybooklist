import axios from 'axios';

const connection = axios.create({
  baseURL: 'https://openlibrary.org/',
});

export default connection;
