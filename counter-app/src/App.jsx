import { useState } from 'react'
import './App.css'

function App() {
    let [counter, setCounter] = useState(5)
    // this is hook and is used to update UI in pages, whenever the variable state (value) is changed the UI gets updated adn setter function is responsible for that

    const addValue = () => {
        counter = counter + 1;
        if (counter > 20) counter = 20;
        console.log(counter, Math.random());
        setCounter(counter)
    }

    const removeValue = () => {
        counter = counter - 1;
        if (counter < 0) counter = 0;
        console.log(counter, Math.random());
        setCounter(counter)
    }

    return (
        <div>
            <h2>counter {counter}</h2>
            <br />
            <button
                onClick={addValue}
            >Add Value {counter}</button>
            <br />
            <br />
            <button
                onClick={removeValue}
            >Remove value {counter}</button>
            <br /><br />
            <p>counter {counter}</p>
        </div>
    )
}

export default App
