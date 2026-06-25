
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./Navbar";
import Footer from "./Footer";

// 1. Import your page components
import Home from "./Home"; 
import Residential from "./Residential"; 
import Roam from './Roam';

function App() {
  return (
    <BrowserRouter>
      <div>
        {/* The Navbar stays visible at the top of every page */}
        <Navbar />

        {/* The Routes section swaps out the middle content based on what link you click */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Residential" element={<Residential />} />
          <Route path="Roam" element={<Roam/>}/>
        </Routes>

        {/* The Footer stays visible at the bottom of every page */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;