import NavBar from "./Navbar";
import Aboutus from './Aboutus'; 
import Home from './Home'; // Ensure 'Home.js' exists and is correctly named
import Contactus from "./Contactus";


import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/contactus" element={<Contactus />} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
