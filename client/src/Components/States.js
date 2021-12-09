import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import NewForm from "./NewForm";
import State from "./State";

// const handleSubmit = () => {
//     return (
//       <div> 
//       <h1> State Here </h1>
//       </div>
//     );
// };


const States = () => {
  const [states, setStates] = useState([]);
  const [name, setName] = useState([]);
  const [heatIndex, setheatIndex] = useState([]);
  // let navigate = useNavigate();
  useEffect(() => {
    getStates();
  }, []); 
  
  const getStates = async () => {
    let res = await axios.get("/api/states");
    setStates(res.data)
  };

  const addState = async (newState) => {
    console.log("NewForm Axios hit")
     let res = await axios.post(`/api/states`, newState);
     setStates([ ...states, newState])
    };
  
  const renderStates = () => {
    return states.map ((state)=>{
     return (
       <div>
         <h3>{state.name}</h3>
         <Link to={`/states/${state.id}`}> View </Link>
       </div>
     ) 
    })
  };
  
  return (
    <div>
      <h1>Welcome to RouteFinder!</h1>
      <h2>Click on a State to begin</h2>
       {renderStates()} 
       <NewForm { ...states} addState={addState}/>
    </div>
  );
};

export default States;