import React, { useState, useRef } from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'

function App () {
  const [value, setValue] = useState(0);
  const inputOne = useRef(null);
  const inputTwo = useRef(null);


  const getNumBox = () => {
    console.log(inputOne.current);
    inputOne.current.style.width = "50%"
    // useRef return object as value
    // useRef use hta h reference pass karne k liye kisi element ka taaki us reference se us element pe manipulation kiya ja ske.
  }
  
  const getTextBox = () => {
    console.log(inputTwo.current);
    inputTwo.current.style.width = "50%"
    // useRef return object as value
  }


  return (
    <div>
      <div>
        <input
          type="number"
          ref={inputOne}
          value={value}
          onChange={(e) => {
            setValue(e.target.value)
          }}
        />
        <input
          type="text"
          ref={inputTwo}
          value={value}
          onChange={(e) => {
            setValue(e.target.value)
          }}
        />
      </div>
      <h2>Value: {value}</h2>
      <div>
        <button
          onClick={() => {
            getNumBox();
          }}
        >kuchh to hoga</button>
        <button
          onClick={() => {
            getTextBox()
          }}
        >kuch kuch hoga</button>
      </div>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
