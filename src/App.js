import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './component/LoginForm';

import AuthenticatedRoute from './component/AuthenticatedRoute';// Import the AuthenticatedRoute component
import Home from './component/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/home" element={<Home />} /> {/* Define your home page route */}
      </Routes>
    </Router>
  );
}

export default App;
