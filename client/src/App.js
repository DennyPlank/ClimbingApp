import "./App.css";
// import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router";
import About from "./About";

function App() {
  return (
    <div className="App">
      <>

      <Routes>
        <Route path="/" element={<About />} />
      </Routes>

      </>
    </div>
  );
}

export default App;
