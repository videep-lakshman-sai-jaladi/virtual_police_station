import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Navbar";
import Home from "./Home";
import Signup from "./Signup";
import Login from "./Login";
import FIRForm from "./fir";
import ESignSuccess from "./ESignSuccess";
function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/e-fir" element={<FIRForm/>}/>
        <Route path="/esign-success" element={<ESignSuccess />} />
      </Routes>
    </Router>
  );
}

export default App;
