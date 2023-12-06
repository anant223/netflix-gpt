import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { auth } from '../utils/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';
import { LOGO } from '../utils/constants';

const Header = () => {
  const { isLogin, setIsLogin } = useState(false); 
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const user = useSelector(store => store.user)

  const handleBtn = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        console.log("error happened");
      });
  };
   useEffect(() => {
     const unsubscribe = onAuthStateChanged(auth, (user) => {
       if (user) {
         const { uid, email, displayName } = user;
         dispatch(
           addUser({ uid: uid, email: email, displayName: displayName })
         );
         navigate("/browser")
       } else {
         // User is signed out
         dispatch(removeUser());
         navigate("/")
       }
     });
     // unsubscribe when component unmount
     return () => unsubscribe();
   }, []);
  return (
    // <div className="absolute px-8 z-10 py-2 bg-gradient-to-b from-black">
    //   <img
    //     className="w-32 md:w-44"
    //     src={LOGO}
    //     alt="logo"
    //   />
    // </div>
    <div className=" absolute w-screen px-8 z-10 bg-gradient-to-b from-black
    flex  justify-between items-center">
      <img
        className="w-32 md:w-44"
        src="https://images.ctfassets.net/y2ske730sjqp/6bhPChRFLRxc17sR8jgKbe/6fa1c6e6f37acdc97ff635cf16ba6fb3/Logos-Readability-Netflix-logo.png"
        alt="logo"
      />
      <div className=''>
        {user &&<button
          onClick={handleBtn}
          className="bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded text-sm">
          Sign Out
        </button>}
      </div>
    </div>
  );
}

export default Header
