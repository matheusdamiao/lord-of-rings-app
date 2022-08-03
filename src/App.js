import React, { useState, useEffect } from 'react'; 
import './App.css';

function App() {

  const [posts, setPosts ] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage, setPostsPerPage] = useState(10)
  const [loading, setLoading] = useState(false)

  
  

  useEffect( () =>{

    const headers = {
      'Accept': 'application/json',
      'Authorization': process.env.REACT_APP_API_KEY
    }
    
    const fetching = async () => {
      
      const req = await fetch('https://the-one-api.dev/v2/quote', {
        headers: headers
      })
      const resp = await req.json()
      console.log(resp)
      setPosts(resp.docs)
        
      
      
    }
    
    fetching()
  },[])

  return (
    <div className="App">
      {posts.map( (post)=>{
        return <li key={post.id}>{post.dialog}</li>
      })}
    </div>
  );
}

export default App;
