import { useLocation } from "react-router-dom"
import NavbarTop from "../components/NavbarTop";
import NavbarBottom from "../components/NavbarBottom";
import SearchbarTop from "../components/SearchbarTop";

const MainLayout = ({ children }) => {
  
  const location = useLocation();
  const showSearchbar = location.pathname === '/' || location.path === '/list';

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar for larger displays */}
      <div className="hidden md:block">
        <NavbarTop />
      </div>

      {/* Searchbar for specific routes */}
      {showSearchbar && <SearchbarTop />}

      {/* Main Content */}
      <main className="flex-grow container mx-auto p-4 mt-16">{children}</main>

      {/* Navbar for smaller displays */}
      <div className="block md:hidden">
        <NavbarBottom />
      </div>
    </div>
  );
};

export default MainLayout