import { useEffect, useRef, useState } from 'react'

function App () {

  let user = useRef();

  const pin = useRef();

  const mob = useRef();

  const [admno, setAdmno] = useState('');

  const [isVerified, setIsVerified] = useState(false);

  const getAdmno = async () => {
    const enteredMob = '8092375425';
    const response = await fetch('http://localhost:8081/studentList');
    const result = await response.json();
    result.forEach(each => {
      if (each.fmob === enteredMob) {
        setAdmno(each.admno);
        return;
      }
    });
  }

  // const insertValue = () => {
  //   const userID = mob.current.value;
  //   const PIN = pin.current.value;
  //   console.log(admno + " " + userID + " " + PIN)
  // }

  const insertValue = () => {
    const userID = mob.current.value;
    const PIN = pin.current.value;


    // Prepare the data to be sent in the request body
    const data = {
      admno: admno,
      userID: userID,
      PIN: PIN
    };

    // Make a POST request to the server
    fetch('http://localhost:8080/getQuery', {
      method: 'POST',                           //|
      headers: {                                //|  
        'Content-Type': 'application/json',     //| (request body to send to the server)
      },                                        //|
      body: JSON.stringify(data),               //|
    })
      .then(response => response.json())
      .then(result => {
        console.log('Data inserted successfully:', result);
        // You can perform additional actions after successful insertion
      })
      .catch(error => {
        console.error('Error inserting data:', error);
        // Handle the error appropriately
      });
  };


  useEffect(() => {
    getAdmno();
  }, [isVerified])

  return (
    <>
      <div className='justify-center items-center m-44'>
        <div className='flex justify-center p-4 items-center ml-6'>
          <input type="text" ref={mob} placeholder='Mobile' className='rounded-lg ml-3  p-2' />
        </div>
        <div>
          <button className='text-xl text-ellipsis w-[120px] rounded-lg py-2 ml-4 bg-blue-500'
            onClick={() => {
              setIsVerified(true);
              user.current.value = mob.current.value;
            }}
          >Verify</button>
        </div>
        <div className='flex justify-center p-4 items-center ml-6'>
          <input type="text" ref={user} placeholder='UserID' className='rounded-lg ml-3  p-2' />
        </div>
        <div className=' flex justify-center p-4 items-center'>
          <input type="text" ref={pin} placeholder='PIN' className='ml-10 rounded-lg p-2' />
        </div>
        <div className='flex justify-center items-center p-4 text-white'>
          <button className='text-xl text-ellipsis w-[120px] rounded-lg py-2 ml-4 bg-blue-500'
            onClick={() => {
              insertValue();
            }}
          >Save</button>
        </div>
      </div>
    </>
  )
}

export default App
