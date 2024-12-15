import axios from 'axios';

const BASE_URL = 'https://openlibrary.org';

export const getBooks = async (subject = 'fiction') => {
  try {
    const response = await axios.get(`${BASE_URL}/subjects/${subject}.json?limit=10`);
    const books = response.data.works.map((book) => ({
      id: book.key, // Unique book ID
      title: book.title,
      author: book.authors?.[0]?.name || 'Unknown Author',
      genre: subject, // Genre based on the API request
      coverImage: book.cover_id
        ? `https://covers.openlibrary.org/b/id/${book.cover_id}-L.jpg`
        : 'https://via.placeholder.com/150x200?text=No+Cover', // Placeholder for missing covers
    }));
    return books;
  } catch (error) {
    console.error('Error fetching books:', error);
    throw error;
  }
};
