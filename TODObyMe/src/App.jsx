import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {

  const [isEditable, setIsEditable] = useState(false);
  const [oneTodo, setOneTodo] = useState('');
  const [todos, setTodos] = useState([]);
  const [editableTodo, setEditableTodo] = useState('');
  const [id, setID] = useState(0);

  const addTodo = (e) => {
    e.preventDefault();
    if (oneTodo) {
      setTodos((prev) => [...prev, { id: Date.now(), todo: oneTodo, isComplete: false }])
    }
    setOneTodo('')
  }

  const editTodo = (id) => {
    setTodos((prev) => prev.map((prevTodo) => {
      if (prevTodo.id === id) {
        return { ...prevTodo, todo: editableTodo };
      }
      return prevTodo;
    }))
    // yha pe setTodos ek andr ek function jo ki kuchh return kr rha h aur wo value jake todo m set ho rha h
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  const toggleComplete = ((id) => {
    // setIsEditable(!isEditable)
    setTodos((prev) => prev.map((prevTodo) => {
      if (prevTodo.id === id) {
        return { ...prevTodo, isComplete: !(prevTodo.isComplete) }
      }
      return prevTodo;
    }))

  })


  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))
    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  useEffect(() => {
    console.log(todos);
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  return (
    <div className='mt-8 flex flex-col'>
      <div className='shadow-slate-350 shadow-lg py-2 px-2 gap-1 rounded-xl'>
        <h1 className='py-2 text-2xl font-bold'>Manage Your Todo</h1>
        <form action="" className='flex w-full gap-1  ' style={{ width: '800px' }}>
          <input
            type="text"

            className='rounded-lg w-full p-1 bg-slate-500 flex-grow  font-semibold text-lg'
            // ref={oneTodo}
            value={oneTodo}
            onChange={(e) => {
              setOneTodo(e.target.value);
            }}
          />
          <button
            className='px-3 bg-green-400 text-black font-extrabold rounded-lg'
            onClick={addTodo}
          >ADD</button>
        </form>
      </div>

      <div >
        {(todos.length !== 0) ? (todos.map((each, index) =>
        (
          <div
            key={index}
            style={{ width: '800px' }}
            className='flex gap-1 py-1 px-1 rounded-lg w-full mt-4 text-black font-semibold text-lg bg-orange-300'>
            <input
              type="checkbox"
              className='ml-4 mr-2 w-4'
              checked={each.isComplete}
              onChange={() => {
                toggleComplete(each.id);
              }}
            />

            {isEditable && id == each.id ? (<div className='flex gap-1 py-1 px-1 rounded-lg w-full text-black font-semibold text-lg bg-orange-300'>
              <input
                className={`rounded-lg p-1 flex-grow bg-orange-300 ${each.isComplete ? "line-through" : ""}`}
                value={editableTodo}
                onChange={(e) => {
                  setEditableTodo(e.target.value)
                }}
              ></input><button className={`bg-white px-1 rounded-lg m-auto text-black ${each.isComplete ? 'pointer-events-none' : ''}`}
                onClick={() => {
                  setIsEditable(false);
                  // setEditableTodo(each.todo)
                  editTodo(each.id);
                }}
              >✔</button></div>) : (<div className='flex gap-1 py-1 px-1 rounded-lg w-full text-black font-semibold text-lg bg-orange-300'
              ><input
                className={`rounded-lg p-1 flex-grow bg-orange-300 ${each.isComplete ? "line-through" : ""}`}
                readOnly
                value={each.todo}
              ></input><button className={`bg-white px-1 rounded-lg m-auto text-black ${each.isComplete ? 'pointer-events-none' : ''}`}
                onClick={() => {
                  setIsEditable(true);
                  setEditableTodo(each.todo)
                  setID(each.id);
                  // editTodo(each.id, each.todo);
                }}
              >🖊</button></div>)}

            {/* <button className='bg-white px-1 rounded-lg m-auto text-black'
              onClick={() => {
                setIsEditable(true);
                setEditableTodo(each.todo)
                editTodo(each.id);
              }}
            >🖊</button> */}

            <button className='bg-white px-1 mr-2 ml-2 m-auto rounded-lg text-black'
              onClick={() => {
                deleteTodo(each.id);
              }
              }
            >❌</button>

          </div>
        )
        )) : null
        }
      </div>

    </div>
  )
}

export default App
