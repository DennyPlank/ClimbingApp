import "./App.css";
import { Route, Routes } from "react-router";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import State from "./Components/State";

function App() {
  return (
    <div className="App">
      <>
       
        <Navbar />
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/home" element={<Home />} />
            <Route path="/states/:id" element={<State />} />
          </Routes>
        
      </>
    </div>
  );
}

export default App;
