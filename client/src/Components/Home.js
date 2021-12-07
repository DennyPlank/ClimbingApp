import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import NewForm from "./NewForm";
import States from "./States";

const Home = () => {
  const [states, setStates] = useState([]);
  useEffect(() => {
    getStates();
  }, []); 
  
  const getStates = async () => {
    let res = await axios.get("/api/states");
    setStates(res.data)
  };
  
  const renderStates = () => {
    return states.map ((state)=>{
     return (
       <div>
         <States { ...state} />
       </div>
     ) 
    })
  };
  
  return (
    <div>
      <h1>Welcome to RouteFinder!</h1>
      <h2>Click on a State to begin</h2>
       {renderStates()} 
       <NewForm { ...states} />
    </div>
  );
};

export default Home;