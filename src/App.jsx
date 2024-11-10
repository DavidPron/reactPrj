import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => setData(json));
      
      console.log(data);
  }, []);

  useEffect (() => {
    if(data) {
      console.log("data up:", data)
    }
  }, [data])

  return (
    <>
      {data.map(todo => {
        return (
          <div key={todo.userId}>{todo.title}</div>
        );
      })}
    </>
  )
}

export default App
