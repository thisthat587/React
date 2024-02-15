import React, { useEffect, useRef, useState } from "react";
import { ArrowRight } from 'lucide-react'
import '../src/App.css'
function NewUser () {

    const [fetchData, setFetchData] = useState(false);
    //Jab mobileno. lene ke bad buttton pe click hota h to ye state change krta h aur is se UI update hota h aur list render kr deta h UI pe student ka
    const mobile = useRef(null);
    const [data, setData] = useState([]); //data m wo value ja raha h jo api se fetch hua h.
    let matchedData = []; //matchedData m value refine hoke ja rha h agar mobile no.match hua to.
    
    const getData = async () => {
    // 
        try {
            const response = await fetch('http://localhost:8081/studentList');
            const result = await response.json();
            setData(result);
            console.log(result)
        } catch (error) {
            console.error('Error:', error);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    if (fetchData) {

        const mobileValue = mobile.current.value;

        data.forEach((each) => {
            if (mobileValue === each.fmob) {
                matchedData.push(each);
            }
            else {
                // console.log("not found")
            }
        })
        return (
            <div className=" mt-8" style={{ marginRight: "150px", marginLeft: "150px" }}>
                <div className=" mb-2">
                    <div >
                        <h1 className=" font-bold flex justify-center text-2xl" >Matched Profile</h1>
                        <p className="mt-2 flex text-2xl justify-center text-gray-700">
                            This is a list of all the students registered from this mobile no.
                        </p>
                    </div>
                </div>
                <div style={{ marginTop: '3%' }} className="mb-2 text-center">
                    <table className=" border w-full divide-gray-200">
                        <thead className=" border bg-gray-50">
                            <tr className="   border">
                                <th

                                    className="  py-3.5 border text-center text-lg font-bold"
                                >
                                    Name
                                </th>
                                <th
                                    className="   border py-3.5 text-center text-lg font-bold text-gray-700"
                                >
                                    Father's Name
                                </th>

                                <th
                                    className="   border py-3.5 text-center text-lg font-bold text-gray-700"
                                >
                                    Class
                                </th>
                                <th className="   border py-3.5 relative ">
                                    <span className="sr-only">Action</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody className=" divide-gray-400 border bg-white">
                            {matchedData.map((person) => (
                                <tr key={person.name} className="  border">
                                    <td style={{ width: '30%' }} className="py-3.5 border text-center text-lg font-bold">
                                        <div className="flex w">
                                            <div style={{ width: '15%' }}>
                                                <img
                                                    className="h-10 w-10 rounded-full "
                                                    src='https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80'

                                                    alt="pic"
                                                />
                                            </div>
                                            <div>
                                                <div className="text-lg font-bold text-gray-900">{person.name}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="   py-3.5 border">
                                        <div className="text-lg font-bold text-gray-900 ">{person.fname}</div>
                                    </td>
                                    <td className="   py-3.5 border items-center ml-2 font-bold text-lg text-gray-700">
                                        {person.class}
                                    </td>
                                    <td className="    py-3.5 border text-center text-lg font-bold">
                                        <button
                                            type="button"
                                            className="rounded-md bg-black px-3 py-2 leading-7 text-white hover:bg-black/80"
                                        ><ArrowRight size={16} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }


    return (
        <div className=" flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
            <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
                <div className="mb-2 text-center">
                    <label
                        className=" text-2xl font-bold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        htmlFor="mobile"
                    >
                        Enter your registered Mobile No. to Search
                    </label>
                </div>
                <div className=" mb-2">

                    <input
                        className="w-full rounded-md border border-black/50 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600"
                        type="text"
                        placeholder="Enter your Mobile no."
                        id="mobile"
                        ref={mobile}
                    />
                </div>
                <div className="mb-2 flex justify-center">
                    <button
                        type="button"
                        className="rounded-md bg-black px-3 py-2 text-2xl font-bold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                        onClick={() => {
                            setFetchData(true);
                        }}
                    >
                        Search
                    </button>
                </div>
            </div>
        </div>
    )
}

export default NewUser;