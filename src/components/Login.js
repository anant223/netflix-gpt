import React, {useRef, useState } from 'react'
import Header from './Header'
import { checkValidaData } from '../utils/validate'
import { auth } from '../utils/firebase';
import {createUserWithEmailAndPassword,signInWithEmailAndPassword,  updateProfile} from "firebase/auth";
import { BG_URL } from '../utils/constants';

const Login = () => {
  const [isSingIn , setIsSingIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const name = useRef(null);
  const password = useRef(null);
  const handleClick = () =>{
    setIsSingIn(!isSingIn)
  }
  const handleBtnClick = () =>{
    // validation the form data
    // console.log(email.current.value);
    // console.log(password.current.value);
    const message = checkValidaData(email.current.value, password.current.value);
    // console.log(message)
    setErrorMessage(message && "password/username is not valid");

    if(message) return;

    if (!isSingIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
        
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,

            photoURL: "https://avatars.githubusercontent.com/u/118093503?v=4",
          })
            .then(() => {
              // Profile updated!
              
            })
            .catch((error) => {
              // An error occurred
              // ...
            });
          console.log(user);
        })
        .catch((err) => {
          const errCode = err.code;
          const errMessage = err.message;
          setErrorMessage(errCode + " " + errMessage);
        });
    } else {
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage)
        });

    }

  

  }
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          className=""
          src={BG_URL}
          alt="bg"
        />
      </div>
      <div className="absolute bg-black top-0 w-80 my-36 mx-auto right-0 left-0 p-3 rounded-lg text-white bg-opacity-80">
        <h1 className="text-lg mx-6 my-1">{isSingIn ? "Sign In" : "Sign Up"}</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="  relative p-8 space-y-4 z-auto "
        >
          {!isSingIn && (
            <input
              ref={name}
              className="p-2 rounded bg-gray-800 w-56"
              type="text"
              placeholder="Name"

            />
          )}
          <input
            ref={email}
            className="p-2 rounded bg-gray-800 w-56"
            type="text"
            placeholder="Email"
          />
          <input
            ref={password}
            className="p-2 rounded bg-gray-800 w-56"
            type="password"
            placeholder="Password"
          />
          <small className="text-red-500">{errorMessage}</small>

          <button
            onClick={handleBtnClick}
            className="bg-red-500 hover:bg-red-700 text-white p-2 w-56  rounded"
          >
            {isSingIn ? "Sign In" : "Sing Up"}
          </button>
          <p className="cursor-pointer" onClick={handleClick}>
            {isSingIn
              ? "New here? Sign Up Now"
              : "Have already Account ? Sing In"}
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login
