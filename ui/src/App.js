import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PrivateComponent from './components/PrivateComponent';
import PublicComponent from './components/PublicComponent';
import LogoutComponent from './components/LogoutComponent';
import LoginComponent from './components/LoginComponent';
import Home from './components/Home'; // Your main or home component

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginComponent />} />
        <Route path="/logout" element={<LogoutComponent />} />
        <Route path="/public" element={<PublicComponent />} />
        <Route path="/private" element={<PrivateComponent />} />
      </Routes>
    </Router>
  );
};

export default App;
