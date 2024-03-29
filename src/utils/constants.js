export const LOGO =
  "https://images.ctfassets.net/y2ske730sjqp/6bhPChRFLRxc17sR8jgKbe/6fa1c6e6f37acdc97ff635cf16ba6fb3/Logos-Readability-Netflix-logo.png";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + process.env.REACT_APP_TMDB_KEY,
  },
};

export const POSTER_URL = "https://image.tmdb.org/t/p/w500/";
export const BG_URL =
  "https://assets.nflxext.com/ffe/siteui/vlv3/893a42ad-6a39-43c2-bbc1-a951ec64ed6d/1d86e0ac-428c-4dfa-9810-5251dbf446f8/IN-en-20231002-popsignuptwoweeks-perspective_alpha_website_large.jpg";
export const LANGUAGE = [
  { identify: "en", name: "English" },
  { identify: "hindi", name: "हिंदी" },
  { identify: "español", name: "Español" },
];

export const logo = (
  <svg
    id="Group_635"
    data-name="Group 635"
    xmlns="http://www.w3.org/2000/svg"
    width="110.999"
    height="30"
    viewBox="0 0 110.999 30"
  >
    <path
      id="Path_1485"
      data-name="Path 1485"
      d="M105.062,14.281,111,30c-1.75-.25-3.5-.563-5.281-.844l-3.344-8.687-3.437,7.969c-1.687-.281-3.344-.376-5.031-.594l6.032-13.75L94.468,0h5.063l3.062,7.874L105.875,0H111ZM90.469,0H85.875V27.25c1.5.094,3.062.156,4.594.343ZM81.906,26.937c-4.187-.281-8.375-.53-12.655-.625V0h4.686V21.875c2.688.063,5.375.281,7.969.406ZM64.25,10.656v4.687H57.844V26H53.219V0H66.344V4.687h-8.5v5.969ZM45.343,4.687V26.25c-1.562,0-3.156,0-4.687.062V4.687H35.812V0H50.218V4.687ZM30.75,15.593c-2.062,0-4.5,0-6.25.095v6.969c2.75-.188,5.5-.407,8.281-.5v4.5L19.813,27.688V0H32.781V4.687H24.5V11c1.813,0,4.594-.094,6.25-.094ZM4.781,12.968V29.343C3.094,29.531,1.593,29.75,0,30V0H4.469l6.093,17.032V0H15.25V28.062c-1.656.282-3.343.376-5.125.625Z"
      fill="#e50914"
    />
  </svg>
);
export const OPEN_AI_KEY = process.env.REACT_APP_OPEN_AI_KEY;

export const initialState = {
  isPlaying: false,
  muted: false,
  volume: 1,
};