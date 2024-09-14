import { useState, useEffect } from "react";
import axios from 'axios';
import  DocumentTitleUpdater from './data';
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);



  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users').then((res) => {
      setData(res.data)
      console.log(res.data)
    }).catch((err) => {
      console.log('error  hai bhai fetching mai'  , err)
    })
    }, []);


  useEffect(() => {
    const screenLog = document.querySelector("#screen-log");

    function logKey(e) {
      screenLog.innerText = `
        Screen X/Y: ${e.screenX}, ${e.screenY}
        Client X/Y: ${e.clientX}, ${e.clientY}`;
    }

    // Add event listener
    document.addEventListener("mousemove", logKey);

    // Cleanup function to remove event listener
    return () => {
      document.removeEventListener("mousemove", logKey);
    };
  }, []); // Empty dependency array ensures this runs once on mount


  return (
    <>
      <h1>Ques 7</h1>
<DocumentTitleUpdater />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Love U {count}
        </button>
      </div>

      <div id="screen-log"></div>
      <strong> Esi hai fir jalwa hai</strong>

      <div id="userData">
        {data.map((user, index) => (
          <div className="card-user" key={index}>
            <h2>{user.name}</h2>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
