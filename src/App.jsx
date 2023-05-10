import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './templates/Home.jsx';
import About from './templates/About.jsx';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;