import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

import Main from './components/Main';
import Search from './components/Search';

function App() {
  const [users, setUsers] = useState([]);

  const searchUsers = async (userName) => {
    try {
      let result = await axios.get(`https://api.github.com/search/users?q=${userName}`);
      setUsers(result.data.items);
      console.log(result.data.items);
    } catch (error) {
      console.error(error);
    }
  }

  const defaultUsers = async () => {
    try {
      let result = await axios.get('https://api.github.com/users');
      console.log(result.data);
      setUsers(result.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    defaultUsers();
  }, [])

  return (
    <>
      <div className="text-center mt-10">
        <h1 className="text-4xl font-bold mb-4">GitHub User Search</h1>
        <Search searchUsers={searchUsers} />
        <Main users={users} />
      </div>
    </>
  );
}

export default App;