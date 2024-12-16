import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import BooksAPI from '../apis/BooksAPI';

const BookDetailsPage = () => {
  const { id } = useParams(); // Access the book ID from the route
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const bookDetails = await BooksAPI.getBookDetails(id); // API call to fetch book by ID
        setBook(bookDetails);
      } catch (error) {
        console.error('Error fetching book details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBookDetails();
  }, [id]);


  
  if (loading) {
    return <div>Loading book details...</div>;
  }

  if (!book) {
    return <div>Book not found.</div>;
  }



  return (
    <div className="bg-gray-100 min-h-screen p-4">
      {/* Book Cover */}
      <div className="bg-white p-4 rounded shadow-md">
        <img
          src={
            book.coverImage ||
            'https://via.placeholder.com/150x200?text=No+Cover'
          }
          alt={book.title}
          className="w-full h-64 object-contain mb-4 rounded"
        />
      </div>

      {/* Book Info */}
      <div className="mt-4">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">{book.title}</h1>
        <p className="text-gray-600 mb-2">
          Author:{' '}
          <span className="text-gray-800 font-semibold">
            {book.author || 'Unknown Author'}
          </span>
        </p>
        <p className="text-gray-600 mb-2">
          Genre:{' '}
          <span className="text-gray-800 font-semibold">
            {book.genre || 'Unknown Genre'}
          </span>
        </p>
        <p className="text-gray-600">
          Published:{' '}
          <span className="text-gray-800 font-semibold">
            {book.publishedDate || 'Unknown Date'}
          </span>
        </p>
      </div>

      {/* Book Description */}
      <div className="mt-6 bg-white p-4 rounded shadow-md">
        <h2 className="text-lg font-semibold text-gray-800 mb-2">
          Description
        </h2>
        <p className="text-gray-700 leading-relaxed">
          {book.description || 'No description available for this book.'}
        </p>
      </div>

      {/* Actions */}
      <div className="mt-6">
        <button className="w-full bg-blue-500 text-white py-2 rounded-md shadow hover:bg-blue-600">
          Add to My List
        </button>
      </div>
    </div>
  );
};

export default BookDetailsPage;
