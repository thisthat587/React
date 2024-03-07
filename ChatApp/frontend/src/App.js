import './App.css';

import io from 'socket.io-client';
import { useState, useEffect, useRef } from 'react'
import { nanoid } from 'nanoid'
const userName = nanoid(6);
const socket = io.connect("http://localhost:5000")

function App() {
  const messageContainerRef = useRef();

  // Function to scroll to the bottom of the message container
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState([])

  const [date, setDate] = useState(''); // Replace this with your actual date 

  const setDateAndTime = () => {
    const d = new Date();
    const options = {
      day: 'numeric',
      month: 'long',
      hour: 'numeric',
      minute: 'numeric',
      timeZone: 'Asia/Kolkata', // Set the time zone to Indian Standard Time (IST)
    };

    const formattedDate = new Intl.DateTimeFormat('en-IN', options).format(d);
    setDate(formattedDate);
  }



  const scrollToBottom = () => {
    if (messageContainerRef.current) {
      messageContainerRef.current.scrollTop = messageContainerRef.current.scrollHeight;
    }
  };

  const sendMessage = (e) => {
    e.preventDefault();
    if (message !== '') {
      socket.emit('chat', { message, userName })
    }
    setMessage('');
  }
  let clients = 0;
  useEffect(() => {
    socket.on('chat', (payload) => {
      setChat([...chat, payload]);
    })
    scrollToBottom();
    setDateAndTime();
  })

  return (
    <div>
      <h1 className="title">Chat App 💬</h1>
      <div className="main">
        <div className="name">
          <span><i className="far fa-user"></i></span>

          <input
            type="text"
            id="name-input"
            className="name-input"
            value='Group-chat'
            maxLength="20"
          />
        </div>

        <ul className="message-container" id="message-container" ref={messageContainerRef}>
          {chat.map((payload, index) => {
            return payload.userName === userName ? (<li key={index} className="message-right">
              <p className="message">
                {payload.message}
                <span>{payload.userName} ● {date}</span>
              </p>
            </li>) : (<li key={index} className="message-left">
              <p className="message">
                {payload.message}
                <span>{payload.userName} ● {date}</span>
              </p>
            </li>)
          })}

          {/* <li className="message-right">
            <p className="message">
              lorem impsun
              <span>bluebird ● 26 July 10:40</span>
            </p>
          </li> */}
        </ul>

        <form className="message-form" id="message-form">
          <input
            type="text"
            name="message"
            id="message-input"
            className="message-input"
            value={message}
            autoFocus
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          />
          <div className="v-divider"></div>
          <button
            type="submit"
            className="send-button"
            onClick={sendMessage}
          >
            send <span><i className="fas fa-paper-plane"></i></span>
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
