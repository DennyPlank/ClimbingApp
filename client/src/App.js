import "./App.css";
import { Route, Routes } from "react-router";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";

function App() {
  return (
    <div className="App">
      <>
        <div>
        <Navbar />
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/home" element={<Home />} />
          
          </Routes>
        </div>
      </>
    </div>
  );
}

export default App;
