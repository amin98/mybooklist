import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import ListPage from './pages/ListPage';
import ProfilePage from './pages/ProfilePage';
import BookDetailsPage from './pages/BookDetailsPage';

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/list" element={<ListPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/book/:id" element={<BookDetailsPage />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
