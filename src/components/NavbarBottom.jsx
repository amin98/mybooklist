import { Link } from 'react-router-dom';
import {
  HomeIcon,
  MagnifyingGlassIcon,
  ListBulletIcon,
  UserCircleIcon,
} from '@heroicons/react/24/solid';
import { EllipsisHorizontalCircleIcon } from '@heroicons/react/24/outline';

const NavbarBottom = () => {
  return (
    <nav className="fixed bottom-0 left-0 w-full bg-gray-800 text-white border-t border-gray-700">
      <div className="flex justify-around items-center py-2">
        {/* Home Icon */}
        <Link
          to="/"
          className="flex flex-col items-center text-sm hover:text-gray-400"
        >
          <HomeIcon className="w-6 h-6" />
          <span>Home</span>
        </Link>

        {/* Search Icon */}
        <Link
          to="/search"
          className="flex flex-col items-center text-sm hover:text-gray-400"
        >
          <MagnifyingGlassIcon className="w-6 h-6" />
          <span>Search</span>
        </Link>

        {/* My List Icon */}
        <Link
          to="/list"
          className="flex flex-col items-center text-sm hover:text-gray-400"
        >
          <ListBulletIcon className="w-6 h-6" />
          <span>My List</span>
        </Link>

        {/* Profile Icon */}
        <Link
          to="/profile"
          className="flex flex-col items-center text-sm hover:text-gray-400"
        >
          <UserCircleIcon className="w-6 h-6" />
          <span>Profile</span>
        </Link>
        <div
          to="/profile"
          className="flex flex-col items-center text-sm hover:text-gray-400"
        >
          <EllipsisHorizontalCircleIcon className="w-6 h-6" />
          <span>More</span>
        </div>
      </div>
    </nav>
  );
};

export default NavbarBottom;
