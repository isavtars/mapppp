import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';

import Map from "./mymap";
import SimpleMap2  from "./map2" 

import './App.css';

function App() {
  const navigate = useNavigate();
  const goToMap = () => {
    navigate('/map'); // Change '/about' to any route you want
  };
  const goToMap2 = () => {
    navigate('/map2'); // Change '/about' to any route you want
  };

  return (
    <div className="App">
      <button onClick={goToMap}>
        Go to map item 
      </button>

      <button onClick={goToMap2}>
        Go to map2 item
      </button>

      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/map" element={<Map />} />
        <Route path="/map2" element={<SimpleMap2 />} />
      </Routes>
    </div>
  );
}

export default App;
