const SearchbarTop = () => {
  return (
    <div className="fixed top-0 left-0 w-full bg-gray-800 p-4 z-10">
      <div className="container mx-auto">
        <input
          type="text"
          placeholder="Search..."
          className="w-full p-2 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>
  );
};

export default SearchbarTop;
