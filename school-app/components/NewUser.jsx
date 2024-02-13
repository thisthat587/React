import React from "react";


function NewUser () {
    return (
        <div className=" flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
            <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
                <div className="mb-2 text-center">
                    <label
                        className=" text-2xl font-bold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        htmlFor="mobile"
                    >
                        Enter your Mobile No. to Search
                    </label>
                </div>
                <div className=" mb-2">

                    <input
                        className="w-full rounded-md border border-black/50 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600"
                        type="text"
                        placeholder="Enter your Mobile no."
                        id="mobile"
                    />
                </div>
                <div className="mb-2 flex justify-center">
                    <button
                        type="button"
                        className="rounded-md bg-black px-3 py-2 text-2xl font-bold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                        Search
                    </button>
                </div>
            </div>
        </div>
    )
}

export default NewUser;