import React, { useState } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';
import { LANGUAGE} from '../utils/constants';
import { toggleGPTSearchView } from '../utils/gptSlicie';
import { changeLang } from '../utils/langSlice';
import HomeIcon from "@mui/icons-material/Home";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { filterBasedOncategories } from '../utils/movieSlice';
import Badge from "@mui/material/Badge";
import SearchIcon from "@mui/icons-material/Search";


const Header = () => {
  const [isToggled, setIsToggled] = useState(1);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isHeader, setIsHeader] = useState(false);
  const [inputVal, setInputVal] = useState("")
  const user = useSelector((store) => store.user);
  const GPT = useSelector((store) => store.GPT.showGPTSearch);
  // const moviesList = useSelector((store) => store.movies)






const handleCategoriesChange = (category) =>{
    dispatch(filterBasedOncategories(category))
  }
useEffect(() => {
    const handleScorll = () => {
      const scrolled = window.scrollY > 0;
      setIsHeader(scrolled);
    };

    window.addEventListener("scroll", handleScorll);

    return () => {
      window.removeEventListener("scroll", handleScorll);
    };
  }, []);

const headStyle = ` ${
    isHeader
      ? `bg-black transition-colors duration-[0.4s] ease-in-out opacity-85`
      : ""
  }`;

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
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browser");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    // unsubscribe when component unmount
    return () => unsubscribe();
  }, []);

  const GPTSearchBtn = () => {
    dispatch(toggleGPTSearchView());
  };
  const handleLangChange = (e) => {
    dispatch(changeLang(e.target.value));
  };
  const handleActiveButton = (btnId) => {
    setIsToggled(btnId);
  };

// allMoviesTVCollection?.filter((item) => console.log(item))

  const handleSearchVal = (e) =>{
     setInputVal(e.target.value)
  }

  
  return (
    <div className={` text-gray-400 text-sm`}>
      <div
        className={`bg-gradient-to-b from-black fixed z-20 w-full h-auto ${headStyle}`}
      >
        <div className="flex justify-between items-center mx-10">
          <div className="flex items-center">
            <svg
              id="Group_635"
              data-name="Group 635"
              xmlns="http://www.w3.org/2000/svg"
              width="110.999"
              height="30"
              viewBox="0 0 110.999 30"
              className="h-[68px]"
            >
              <path
                id="Path_1485"
                data-name="Path 1485"
                d="M105.062,14.281,111,30c-1.75-.25-3.5-.563-5.281-.844l-3.344-8.687-3.437,7.969c-1.687-.281-3.344-.376-5.031-.594l6.032-13.75L94.468,0h5.063l3.062,7.874L105.875,0H111ZM90.469,0H85.875V27.25c1.5.094,3.062.156,4.594.343ZM81.906,26.937c-4.187-.281-8.375-.53-12.655-.625V0h4.686V21.875c2.688.063,5.375.281,7.969.406ZM64.25,10.656v4.687H57.844V26H53.219V0H66.344V4.687h-8.5v5.969ZM45.343,4.687V26.25c-1.562,0-3.156,0-4.687.062V4.687H35.812V0H50.218V4.687ZM30.75,15.593c-2.062,0-4.5,0-6.25.095v6.969c2.75-.188,5.5-.407,8.281-.5v4.5L19.813,27.688V0H32.781V4.687H24.5V11c1.813,0,4.594-.094,6.25-.094ZM4.781,12.968V29.343C3.094,29.531,1.593,29.75,0,30V0H4.469l6.093,17.032V0H15.25V28.062c-1.656.282-3.343.376-5.125.625Z"
                fill="#e50914"
              />
            </svg>
            {!GPT && (
              <div className="">
                <ul className=" cursor-pointer list-none flex justify-between ml-8 gap-5">
                  <li
                    onClick={() => {
                      handleActiveButton(1);
                      handleCategoriesChange("All");
                    }}
                    className={`${
                      isToggled === 1 && "text-white"
                    } hover:text-gray-500`}
                  >
                    Home
                  </li>
                  <li
                    onClick={() => {
                      handleActiveButton(2);
                      handleCategoriesChange("TV Shows");
                    }}
                    className={`${
                      isToggled === 2 && "text-white"
                    }  hover:text-gray-500`}
                  >
                    TV Shows
                  </li>
                  <li
                    onClick={() => {
                      handleActiveButton(3);
                      handleCategoriesChange("Movies");
                    }}
                    className={`${
                      isToggled === 3 && "text-white"
                    }  hover:text-gray-500`}
                  >
                    Movies
                  </li>
                </ul>
              </div>
            )}
          </div>
          <div className="flex items-center gap-1 md:gap-5 text-white">
            {user && (
              <>
                {GPT && (
                  <select onChange={handleLangChange}>
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
                <form className="relative flex items-center bg-transparent" onSubmit={(e) => e.preventDefault()} >
                  <input
                    type="text"
                    className="bg-black border border-white p-1.5 pl-8"
                    value={inputVal}
                    onChange={handleSearchVal}
                  />
                  <button className="pl-1 absolute" onClick={(e) => console.log(e.target.value)}>
                    <SearchIcon />
                  </button>
                </form>

                <button
                  onClick={GPTSearchBtn}
                  className="bg-green-500 hover:bg-green-700 py-2 px-2 rounded text-sm"
                >
                  {!GPT ? "NetflixGPT" : <HomeIcon />}
                </button>
                <Badge badgeContent={"new"} color="error">
                  <NotificationsIcon />
                </Badge>
              </>
            )}
            <div className="relative gap-5 md:gap-10">
              {user && !GPT && (
                <button
                  onClick={handleBtn}
                  className="bg-red-500 hover:bg-red-700 text-white py-2 px-2 rounded text-sm"
                >
                  Sign Out
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header
