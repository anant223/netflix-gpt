import React, { useState } from 'react'
import Header from './Header'
const Login = () => {
  const [isSingIn , setIsSingIn] = useState(true)
  const handleClick = () =>{
    setIsSingIn(!isSingIn)
    
  }
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          className=""
          src="https://assets.nflxext.com/ffe/siteui/vlv3/893a42ad-6a39-43c2-bbc1-a951ec64ed6d/1d86e0ac-428c-4dfa-9810-5251dbf446f8/IN-en-20231002-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="bg"
        />
      </div>
      <div class="absolute bg-black top-0 w-80 my-36 mx-auto right-0 left-0 p-3 rounded-lg text-white bg-opacity-80">
        <h1 class="text-lg mx-6 my-1">{isSingIn ? "Sign In" : "Sign Up"}</h1>
        <form class="relative p-8 space-y-4 z-auto ">
          {!isSingIn && (
            <input
              className="p-1 rounded bg-gray-800 w-56"
              type="text"
              placeholder="Name"
            />
          )}
          <input
            className="p-1 rounded bg-gray-800 w-56"
            type="text"
            placeholder="Email"
          />
          <input
            className="p-1 rounded bg-gray-800 w-56"
            type="password"
            placeholder="Password"
          />
          <button className="bg-red-500 hover:bg-red-700 text-white py-1 px-4 w-56 rounded">
            {isSingIn ? "Sign In" : "Sing Up"}
          </button>
          <p className="cursor-pointer" onClick={handleClick}>
            {isSingIn ? "New here? Sign Up Now" : "Have already Account ? Sing In"}
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login
