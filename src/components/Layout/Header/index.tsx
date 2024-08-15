import { useState } from "react";

const Header = () => {
  const [searchText, setSearchText] = useState("");

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchText = e.target.value;
    setSearchText(searchText);
  };

  return (
    <header className='bg-gray-800 text-white p-4 flex items-center justify-center shadow-md'>
      <div className='w-full max-w-lg'>
        <input
          placeholder='Search for movies...'
          type='text'
          className='w-full py-2 px-4 rounded-lg border border-gray-600 bg-gray-900 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300'
          value={searchText}
          onChange={handleSearchInputChange}
        />
      </div>
    </header>
  );
};

export default Header;
