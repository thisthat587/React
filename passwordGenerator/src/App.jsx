import { useState, useCallback } from 'react'

function App() {

  const [length, setLength] = useState(8);
  const [isNumberAllowed, setIsNumberAllowed] = useState(false);
  const [isCharacterAllowed, setIsCharacterAllowed] = useState(false);
  // const []

  const passwordGenerator = useCallback => (() => {

  }, [])

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <div className="flex shadow rounded-lg overflow-hidden mb-4 w-full">
        <input
          className="outline-none w-full py-1 px-3"
          type="text"
          readOnly
        />
        <button
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 hover:bg-blue-800 rounded-sm'
        >Copy</button>
      </div>

      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input
            type="range"
            min={8}
            max={100}
            className="cursor-pointer"
            onChange={(e) => { setLength(e.target.value) }}
          />
          <label className='bg-blue-100 rounded-lg p-1' >length: {length}</label>

        </div>
        <div className="bg-blue-100 rounded-lg p-1 flex items-center gap-x-2">
          <input
            type="checkbox"
          />
          <label >Numbers</label>
        </div>
        <div className="bg-blue-100 rounded-lg p-1 flex items-center gap-x-2">
          <input
            type="checkbox"
          />
          <label>Character</label>
        </div>
      </div>

    </div>
  )
}

export default App
