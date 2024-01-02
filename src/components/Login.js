import React, {useRef, useState } from 'react'
import Header from './Header'
import { checkValidaData } from '../utils/validate'
import { auth } from '../utils/firebase';
import {createUserWithEmailAndPassword,signInWithEmailAndPassword,  updateProfile} from "firebase/auth";
import { BG_URL } from '../utils/constants';
import Footer from "./Footer"



const Login = () => {
  const [isSingIn , setIsSingIn] = useState(true);
  const [isFocused, setIsFocused] = useState(false);
  const [isValid, setIsValid] = useState(false);
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


  const handleFocus = () => {
    setIsFocused(!isFocused);
    setIsValid(!isValid)

  };

  const dynamicStyles = {
    ...(isFocused &&
      isValid && {
        backgroundColor: "#444",
        paddingTop: "16px",
        paddingRight: "20px",
        paddingBottom: "0",
      }),
  };
  return (
    <div className=" bg-black before:content-[''] before:absolute before:left-0 before:top-0 before:opacity-50 before:w-full before:h-full before:bg-center text-white">
      <Header />
      <div className="opacity-50">
        <img className="w-full h-[120vh] object-cover" src={BG_URL} alt="bg" />
      </div>

      <div className=" bg-black absolute left-1/2 top-[55%] rounded p-[70px] w-[420px] transform -translate-x-1/2 -translate-y-1/2">
        <h2 className=" text-white text-[2rem] ">
          {isSingIn ? "Sign In" : "Sign Up"}
        </h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="mt-[25px] mx-0 mb-[65px]"
        >
          {!isSingIn && (
            <div
              className="form-control h-[50px] relative mb-[16px]"
            >
              <input
                ref={name}
                onFocus={handleFocus}
                className="h-full w-full bg-[#333] border-none outline-none rounded text-white text-[1rem] py-0 px-[20px]"
                type="text"
                required
              />
              <label className="absolute left-[20px] top-1/2 transform -translate-y-1/2 text-[1rem] pointer-events-none text-[#8c8c8c] transition-all duration-[0.1s] ease-in  ">
                Name
              </label>
            </div>
          )}

          <div className="h-[50px] relative mb-[16px]">
            <input
              ref={email}
              className="h-full w-full bg-[#333] border-none outline-none rounded text-white text-[1rem] py-0 px-[20px] focus:valid:bg-[#444] focus:valid:pt-[16px] focus:valid:px-[20px] focus:valid:pb-0"
              type="text"
              required
            />
            <label className="absolute left-[20px] top-1/2 transform -translate-y-1/2 text-[1rem] pointer-events-none text-[#8c8c8c] transition-all duration-100 ease focus:valid:text-[0.75rem] focus:valid:transform focus:valid:-translate-y-[130%]">
              Email or Phone Number
            </label>
          </div>
          <div className="h-[50px] relative mb-[16px]">
            <input
              ref={password}
              className="h-full w-full bg-[#333] border-none outline-none rounded text-white text-[1rem] py-0 px-[20px] focus:bg-[#444] focus:pt-[16px] focus:valid:px-[20px] focus:pb-0"
              type="password"
              required
            />
            <label className="absolute left-[20px] top-1/2 transform -translate-y-1/2 text-[1rem] pointer-events-none text-[#8c8c8c] transition-all duration-100 ease focus:valid:text-[0.75rem] focus:valid:transform focus:valid:-translate-y-[130%]">
              Password
            </label>
          </div>
          <small className="text-red-500">{errorMessage}</small>
          <button
            onClick={handleBtnClick}
            className="w-full pt-[16px] pb-[16px] px-0 text-[1rem] bg-[#e50914] text-white rounded border-none outline-none mt-[25px] mx-0 mb-[10px] cursor-pointer ease-in hover:bg-[#c40812]"
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
      <Footer/>
    </div>
  );
}

export default Login
