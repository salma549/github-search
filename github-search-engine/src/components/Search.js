import React, { useState } from 'react';

function Search({ searchUsers }) {
  const [userName, setUserName] = useState("");

  const onClickHandler = () => {
    searchUsers(userName);
  }

  return (
    <div className="flex flex-col items-center mt-4">
      <input 
        type="text" 
        value={userName} 
        onChange={(e) => setUserName(e.target.value)} 
        className="border rounded p-2 mb-4 w-1/2"
        placeholder="Enter GitHub username"
      />
      <button 
        onClick={onClickHandler} 
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
        Search
      </button>
    </div>
  )
}

export default Search;