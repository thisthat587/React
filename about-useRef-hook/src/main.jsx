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
    // useRef return object as value
  }

  const getTextBox = () => {
    console.log(inputTwo.current);
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
