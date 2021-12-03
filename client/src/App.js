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
            <Route path="/states/state_id/routes" element={<Routes />} />
            <Route path="/states/state_id/routes/:id" element={<Route />} />
          </Routes>
        
      </>
    </div>
  );
}

export default App;
