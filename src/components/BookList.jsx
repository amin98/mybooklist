import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import BooksAPI from '../apis/BooksAPI';

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        // Fetch books from the 'fiction' genre
        const bookList = await BooksAPI.getBooks('fiction', 10);
        setBooks(bookList);
      } catch (error) {
        console.error('Error fetching books:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  if (loading) {
    return <div>Loading books...</div>;
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
      {books.map((book) => (
        <Link
        to={`/book/${book.id}`}
          key={book.id}
          className="bg-white p-4 rounded shadow flex flex-col items-center"
        >
          <div className="w-32 h-48 mb-4">
            <img
              src={book.coverImage}
              alt={book.title}
              className="w-full h-full object-contain"
            />
          </div>
          <h2 className="text-lg font-semibold text-center">{book.title}</h2>
          <p className="text-sm text-gray-600 text-center">
            Author: {book.author}
          </p>
          <p className="text-sm text-gray-600 text-center">
            Genre: {book.genre}
          </p>
        </Link>
      ))}
    </div>
  );
};

export default BookList;
