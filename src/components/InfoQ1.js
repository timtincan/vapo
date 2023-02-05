import React from "react";

function InfoQ1() {
    return (
        <form className="w-full flex flex-col justify-center items-center align-center mt-40">
            <div class="flex items-center py-2">
                <input
                    type="text"
                    className="flex items-center border-b border-teal-500 py-2"
                    placeholder="Enter your name..."
                />
            </div>
            <div class="inline-block relative w-64 mt-3">
                <legend>Choose your goal:</legend>
                <select class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                    <option>3 days</option>
                    <option>5 days</option>
                    <option>1 week</option>
                    <option>2 week</option>
                    <option>1 month</option>
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                        class="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                    >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                </div>
            </div>
            <div class="flex items-center py-2">
                <legend>Enter a one sentence reason why you want to quit:</legend>
                <input
                    type="text"
                    className="lex items-center border-b border-teal-500 py-2"
                />
            </div>
        </form>
    );
}

export default InfoQ1;
