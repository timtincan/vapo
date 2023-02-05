import { upload } from "@testing-library/user-event/dist/upload";
import React from "react";

function Signup() {
    return (
        <div>
            <form
                action=""
                className="flex flex-col justify-center items-center"
            >
                <h3 className="text-5xl mb-20 mt-20">Quit vaping now:</h3>
                <div class="md:w-1/3 md:flex md:items-center mb-6">
                    <input
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                        type="email"
                        placeholder="Enter your email..."
                    />
                </div>
                <div class="md:w-1/3 md:flex md:items-center mb-6">
                    <input
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                        type="password"
                        placeholder="Enter your password..."
                    />
                </div>
                <div class="md:w-1/3 md:flex md:items-center mb-6">
                    <input
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                        type="password"
                        placeholder="Confirm your password..."
                    />
                </div>
                <button
                    className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                    type="button"
                >
                    Sign Up
                </button>
            </form>
            <div className="flex justify-center items-center mt-5">
                <span>
                    Already a member?{" "}
                    <a href="/login" className="underline">
                        Log In
                    </a>
                </span>
            </div>
        </div>
    );
}

export default Signup;
