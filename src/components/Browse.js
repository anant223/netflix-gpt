import React from 'react'
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';


const Browse = () => {
  const navigate = useNavigate()
  const handleBtn = () =>{
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate('/')
      })
      .catch((error) => {
        // An error happened.
       console.log('error happened');

        
      });


  }
  return (
    <div className=" absolute w-screen px-8 z-10 bg-gradient-to-b from-black
    flex  justify-between items-center">
      <img
        className="w-32 md:w-44"
        src="https://images.ctfassets.net/y2ske730sjqp/6bhPChRFLRxc17sR8jgKbe/6fa1c6e6f37acdc97ff635cf16ba6fb3/Logos-Readability-Netflix-logo.png"
        alt="logo"
      />
      <div className=''>
        <button
          onClick={handleBtn}
          className="bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded text-sm">
          Sign Out
        </button>
      </div>
    </div>
  );

}

export default Browse