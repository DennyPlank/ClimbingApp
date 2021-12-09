import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import NewForm from "./NewForm";
import States from "./States";

const Home = () => {
  return (
    <div>
      <h1> Home Here </h1>
      <Link to="/states"> States </Link>
    </div>
  )
};


export default Home;