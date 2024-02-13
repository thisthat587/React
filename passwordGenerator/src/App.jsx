
/*
Learnt to build a password generator application in React in an optimized way 
using some hooks like useState, useCallback, useRef, useEffect.

- It comes with the options to specify the length of password and to include numbers and special characters.
- And it also let the generated password to copy on the clipboard.

All thanks to the video in the link below from #chaiaurcode youtube channel.

https://www.youtube.com/watch?v=Lt4vy8hfc-s&list=PLu71SKxNbfoDqgPchmvIsL4hTnJIrtige&index=10

(@hitesh choudhary)
*/
import { useState, useCallback, useEffect, useRef } from 'react'

function App () {
    const [length, setLength] = useState(8);
    const [isNumberAllowed, setIsNumberAllowed] = useState(false);
    const [isCharacterAllowed, setIsCharacterAllowed] = useState(false);
    const [password, setPassword] = useState('');
    const passwordRef = useRef(null)


    const passwordGenerator = useCallback(() => {
        let pass = '';
        let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

        if (isNumberAllowed) str += "1234567890"

        if (isCharacterAllowed) str += "!@#$%^&*-_+=[]{}~`"

        for (let i = 0; i < length; i++) {
            let charPos = Math.floor(Math.random() * str.length + 1)
            pass += str.charAt(charPos);
        }

        setPassword(pass); 

    }, [length, isNumberAllowed, isCharacterAllowed, setPassword])



    const copyPasswordToClipboard = () => {
        passwordRef.current?.select();
        passwordRef.current?.setSelectionRange(0, 100);
        window.navigator.clipboard.writeText(password);
    }


    useEffect(() => {
        passwordGenerator();
    }, [length, isNumberAllowed, isCharacterAllowed, passwordGenerator])


    return (
        <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
            <div className="flex shadow rounded-lg overflow-hidden mb-4 w-full">
                <input
                    className="outline-none w-full py-1 px-3"
                    type="text"
                    readOnly
                    value={password}
                    ref={passwordRef}
                />
                <button
                    className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 hover:bg-blue-800 rounded-sm'
                    onClick={copyPasswordToClipboard}
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
                        defaultChecked={isNumberAllowed}
                        onClick={() => {
                            setIsNumberAllowed((prev) => !prev)
                        }}
                    />
                    <label >Numbers</label>
                </div>
                <div className="bg-blue-100 rounded-lg p-1 flex items-center gap-x-2">
                    <input
                        type="checkbox"
                        defaultChecked={isCharacterAllowed}
                        onClick={() => {
                            setIsCharacterAllowed((prev) => !prev)
                        }}
                    />
                    <label>Character</label>
                </div>
            </div>

        </div>
    )
}

export default App
