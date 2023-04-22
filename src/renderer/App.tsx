import React from 'react';
import Builder from 'components/babylon/builder/Builder';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Builder />} />
      </Routes>
    </Router>
  );
}
