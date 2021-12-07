import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const Routes = (props) => {
  const params = useParams();
  const [routes, setRoutes] = useState([])
  useEffect(()=>{
    getRoutes();
  },[])
  
  const getRoutes = async () => {
    console.log('axios hit')
    let res = await axios.get(`/api/states/${params.id}/routes`)
    setRoutes(res.data)
  }

  const renderRoutes = () => {
    return routes.map ((route) => {
      return (
        <div>
          <h3> Routes: </h3>
          <p> Name: {route.name} </p>
          <p> Grade: {route.grade} </p>
          <p> Length: {route.length} </p>
          <p> View </p>
          </div>
      );
    });
  };
  
  return (
    <div> 
      <h3> Add a route here</h3>
      <p> {renderRoutes()} </p>
    </div>
    )
};

export default Routes;