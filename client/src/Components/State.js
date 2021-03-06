import axios from 'axios';
import React, { useEffect, useState } from "react";
import { useParams } from 'react-router';
import UpdateForm from './UpdateForm';
import Routes from './Routes';
import NewForm from './NewForm';


 

const State = () => {
  const params = useParams();
  
  const [state, setState] = useState([]);
  useEffect(() => {
    getState();
  }, []); 

  const getState = async () => {
    let res = await axios.get(`/api/states/${params.id}`);
    setState(res.data)
  };

  

 return (
   <div>
     <h1>{state.name}</h1>
     <NewForm { ...state} />
     <h2>Climate: {state.heatIndex}</h2>
      <Routes { ...state}/>
   </div>
 )
};

export default State;