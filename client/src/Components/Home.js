import React, { useEffect, useState } from "react";
import axios from 'axios'

const Home = () => {
  const [states, setStates] = useState([]);
  useEffect(() => {
    console.log("states mounted");
    getStates();
  }, []); 
  
  const getStates = async () => {
    let res = await axios.get("/api/states");
    setStates(res.data)
  }
  
  return (
    <div>
      <h1>Welcome to RouteFinder!</h1>
      <h2>What state would you like to search in routes for?</h2>
      <p> *put a button (or dropdown) for each state here*</p>

      <h6>Test Axios Below</h6>
      {/* {getStates()} */}
    </div>
  );
};

export default Home;