import { useState } from "react";

const Header = () => {
  const [searchText, setSearchText] = useState("");

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchText = e.target.value;
    setSearchText(searchText);
  };

  return (
    <div className='bg-gray-200 w-full p-4 flex items-center justify-center placeholder:text-xs'>
      <div className=''>
        <input
          placeholder='Enter Movie Title'
          type='text'
          className='outline-none py-1 px-2 rounded-sm'
          value={searchText}
          onChange={handleSearchInputChange}
        />
      </div>
    </div>
  );
};

export default Header;
