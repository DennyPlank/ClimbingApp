import axios from 'axios';
import react from 'react'
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Route = () => {
  const [routes, setRoute] = useState([]);
  const params = useParams();
  useEffect(() => {
    getRoute();
  }, []); 
  
  const getRoute = async () => {
    console.log(params)
    let res = await axios.get(`/api/states/${params.id}/routes`);
    console.log(res.data)
    setRoute(res.data)
  };
    
  const renderRoutes = () => {
    return routes.map((route)=>{
     return (
       <div>
         <p> Name: {route.name} </p>
         <p> Difficulty: {route.grade}</p>
         <p> Length: {route.length} </p>
          <Route />
       </div>
     ) 
    });
  };

  return (
    <div>
      <h5>{renderRoutes()}</h5>
    </div>
  );
};

export default Route;