import { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constants";

const useFetchData = (url) => {
  // Fix: Change from {isUrlData, setIsUrlData} to [isUrlData, setIsUrlData]
  const [isUrlData, setIsUrlData] = useState(null);

  const fetchData = async () => {
    try {
      const data = await fetch(url, API_OPTIONS);
      const jsonData = await data.json();
      // console.log(jsonData);
      setIsUrlData(jsonData);
      return jsonData; // Fix: Return jsonData instead of isUrlData
    } catch (error) {
      console.error("Error fetching data:", error);
      // Handle error appropriately
    }
  };

  useEffect(() => {
    fetchData();
  }, []); // Fix: Add url to dependency array to trigger useEffect on url change

  return isUrlData; // Fix: Return isUrlData from the hook
};

export default useFetchData;
