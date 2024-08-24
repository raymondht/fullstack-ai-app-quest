import { useEffect, useState } from 'react'

import './App.css'
import React from 'react'

function App() {
  const [data, setData] = useState<string>()

  useEffect(() => {
    const fetchDataForPosts = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000`
        );
        if (!response.ok) {
          throw new Error(`HTTP error: Status ${response.status}`);
        }
        console.log({response})

        const postsData = await response.text();
        setData(postsData);
      } catch (err) {
        setData(undefined);
      }
    };

    fetchDataForPosts();
  }, [])
  return (
    <>
      <h1>{data}</h1>
    </>
  )
}

export default App
