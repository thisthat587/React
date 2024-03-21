import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [facts, setFacts] = useState('')

  useEffect(() => {
    fetch('http://localhost:8000/api/facts')
      .then(response => response.json())
      .then(result => setFacts(result))
      .catch(error => console.log("ERROR ", error))
  }, [])

  return (
    <>
      <p>{facts}</p>
    </>
  )
}

export default App
