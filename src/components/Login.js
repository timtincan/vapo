import React from "react";

function Login() {
    return (
        <div>
            <form
                className="flex flex-col justify-center items-center"
                action=""
            >
                <h3 className="text-5xl mb-20 mt-20">Welcome back.</h3>
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
                <button
                    className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                    type="button"
                >
                    Log In
                </button>
            </form>
            <div className="flex justify-center items-center mt-5">
                <span>
                    Not a member?{" "}
                    <a href="/" className="underline">
                        Sign Up
                    </a>
                </span>
            </div>
        </div>
    );
}

export default Login;
