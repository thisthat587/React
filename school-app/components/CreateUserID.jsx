import { useState } from "react";

function CreateUserID (admno) {

    // const [OTPVerified, setOTPVerified] = useState(false);

    // if (OTPVerified) {
    //     return (
    //         <div className="mt-32">
    //             <div className="flex justify-center text-lg items-center">
    //                 <label htmlFor="OTP">Create User ID</label>
    //             </div>
    //             <div className=" flex justify-center items-center">
    //                 <div>
    //                     <input
    //                         className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
    //                         type="text"
    //                         placeholder="Enter User ID"
    //                         id="username"
    //                     ></input>
    //                 </div>
    //             </div>
    //             <div className="flex justify-center text-lg items-center">
    //                 <label htmlFor="OTP">Create PIN</label>
    //             </div>
    //             <div className=" flex justify-center items-center">
    //                 <div>
    //                     <input
    //                         className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
    //                         type="text"
    //                         placeholder="Enter PIN"
    //                         id="PIN"
    //                     ></input>
    //                 </div>
    //             </div>
    //         </div>
    //     )
    // }

    return (
        <div className="mt-32">
            <div className="flex justify-center text-lg items-center">
                <label htmlFor="OTP">Enter OTP sent to your registered Mobile No.</label>
            </div>
            <div className=" flex justify-center items-center">
                <div>
                    <input
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                        type="text"
                        placeholder="Enter OTP"
                        id="OTP"
                    ></input>
                </div>
            </div>
            <div className=" flex justify-center items-center">
                <div>
                    <button
                        type="button"
                        className="inline-flex w-full items-center justify-center rounded-md bg-black px-3 py-2 font-semibold leading-7 text-white hover:bg-black/80"

                    >Verify
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CreateUserID;


