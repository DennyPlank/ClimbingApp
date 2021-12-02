import axios from 'axios';
import react from 'react'
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const State = () => {
  const [state, setStates] = useState([]);
  const params = useParams();
  useEffect(() => {
    getState();
  }, []); 
  
  const getState = async () => {
    let res = await axios.get(`/api/states/${params.id}`);
    setStates(res.data)
  };

  return (
    <div>
      <h2> {state.name} </h2>
      <h3>Climate: {state.heatIndex} </h3>
      <h4> *Render Routes Here *</h4>
    </div>
  );
};

export default State;