import RequestHandler from './RequestHandler';

const BooksAPI = {
  /**
   * Fetch a list of books from a specific subject/genre.
   * @param {string} subject - The subject/genre to fetch books for (default: 'fiction').
   * @param {number} limit - The number of books to fetch (default: 10).
   * @returns {Promise<Array>} - A list of books with title, author, genre, and cover image.
   */
  async getBooks(subject = 'fiction', limit = 10) {
    try {
      const response = await RequestHandler.get(
        `subjects/${subject}.json?limit=${limit}`
      );

      if (!response || response.status !== 200) {
        console.error('Failed to fetch books:', response);
        return [];
      }

      return response.data.works.map((book) => ({
        id: book.key.replace('/works/', ''), // Extract only the unique ID
        title: book.title,
        author: book.authors?.[0]?.name || 'Unknown Author',
        genre: subject,
        coverImage: book.cover_id
          ? `https://covers.openlibrary.org/b/id/${book.cover_id}-L.jpg`
          : 'https://via.placeholder.com/150x200?text=No+Cover',
      }));
    } catch (error) {
      console.error('Error in getBooks:', error.message);
      return [];
    }
  },

  /**
   * Fetch detailed information about a specific book by its ID.
   * @param {string} id - The unique ID of the book (e.g., "OL12345W").
   * @returns {Promise<Object>} - The book details with title, author, genre, description, and cover image.
   */
  async getBookDetails(id) {
    try {
      const response = await RequestHandler.get(`works/${id}.json`);

      if (!response || response.status !== 200) {
        console.error('Failed to fetch book details:', response);
        return null;
      }

      const book = response.data;

      // Fetch detailed author information if available
      const authorKey = book.authors?.[0]?.author?.key;
      const author = authorKey
        ? await this.getAuthorDetails(authorKey.replace('/authors/', ''))
        : 'Unknown Author';

      return {
        id: book.key,
        title: book.title,
        author, // Resolved author name
        genre: book.subjects?.[0] || 'Unknown Genre',
        description: book.description?.value || 'No description available',
        coverImage: book.covers
          ? `https://covers.openlibrary.org/b/id/${book.covers[0]}-L.jpg`
          : 'https://via.placeholder.com/150x200?text=No+Cover',
        publishedDate: book.first_publish_date || 'Unknown Date',
      };
    } catch (error) {
      console.error('Error in getBookDetails:', error.message);
      return null;
    }
  },
  
  async getAuthorDetails(authorId) {
    try {
      const response = await RequestHandler.get(`authors/${authorId}.json`);
      // console.log('Author details:', response.data);
      return response.data?.name || 'Unknown Author';
    } catch (error) {
      console.error('Error fetching author details:', error.message);
      return 'Unknown Author';
    }
  },
};

export default BooksAPI;
