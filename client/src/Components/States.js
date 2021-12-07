import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import State from "./State";

const handleSubmit = () => {
    return (
      <div> 
      <h1> State Here </h1>
      </div>
    );
};


const States = (props) => {
  const { name, id } = props
 return (
   <div>
     <h2>
    <Link to={`/states/${id}`}><button>{name}</button></Link>
    </h2>
   </div>
 )
};

export default States;