import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';
import { LANGUAGE} from '../utils/constants';
import { toggleGPTSearchView } from '../utils/gptSlicie';
import { changeLang } from '../utils/langSlice';

const Header = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const user = useSelector(store => store.user)
  const GPT = useSelector(store => store.GPT.showGPTSearch)

  

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

   const GPTSearchBtn = () =>{
      dispatch(toggleGPTSearchView())
   }
   const handleLangChange = (e) => {
      dispatch(changeLang(e.target.value));
   };

  return (
    // <div className="absolute px-8 z-10 py-2 bg-gradient-to-b from-black">
    //   <img
    //     className="w-32 md:w-44"
    //     src={LOGO}
    //     alt="logo"
    //   />
    // </div>

    <div
      className=" absolute w-screen px-8 z-10 bg-gradient-to-b from-black
    flex  justify-between items-center"
    >
      <img
        className="w-32 md:w-44"
        src="https://images.ctfassets.net/y2ske730sjqp/6bhPChRFLRxc17sR8jgKbe/6fa1c6e6f37acdc97ff635cf16ba6fb3/Logos-Readability-Netflix-logo.png"
        alt="logo"
      />
      <div className="">
        {user && !GPT && (
          <button
            onClick={handleBtn}
            className="bg-red-500 mx-8  hover:bg-red-700 text-white py-2 px-2 rounded text-sm"
          >
            Sign Out
          </button>
        )}
        {user && (
          <>
            {GPT && (
              <select className=" mr-10 bg-transparent text-white" onChange={handleLangChange}>
                {LANGUAGE.map((lang) => (
                  <option
                    className="bg-gray-500"
                    key={lang.identify}
                    value={lang.identify}
                  >
                    {lang.name}
                  </option>
                ))}
              </select>
            )}
            <button
              onClick={GPTSearchBtn}
              className="bg-red-500 hover:bg-red-700 text-white py-2 px-2 rounded text-sm"
            >
              {!GPT ? "GPT Search" : "🔙"}
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default Header
