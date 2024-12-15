import axios from 'axios';

const BASE_URL = 'https://openlibrary.org';

export const searchBooks = async (query) => {
  try {
    const response = await axios.get(`${BASE_URL}/search.json?q=${query}`);
    return response.data.docs; // Array of book results
  } catch (error) {
    console.error('Error fetching books:', error);
    throw error;
  }
};

export const getBookDetails = async (bookId) => {
  try {
    const response = await axios.get(`${BASE_URL}/works/${bookId}.json`);
    return response.data;
  } catch (error) {
    console.error('Error fetching book details:', error);
    throw error;
  }
};
