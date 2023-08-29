import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button } from '@mui/material';

const MyComponent = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState('');

  const fetchData = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setData(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = (postId) =>{
    const deleteUser = data.filter((item) => item.id !== postId)
    setData(deleteUser)
  }

  const handleChange = (e) =>{
    setSearch(e.target.value)
  }

  const searchData = data.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input type='text' name='search' value={search} onChange={handleChange} />
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {searchData.map((item) => (
            <li key={item.id}>
              {item.title}
              <Button variant='outlined' onClick={() => handleDelete(item.id)}>delete</Button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MyComponent;
