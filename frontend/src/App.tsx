import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Maker from './components/Maker';
import Breaker from './components/Breaker';
import Home from './components/Home';
import Login from './components/Login';
import History from './components/History';

function App(): JSX.Element {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">🏠 Home</Link></li>
            <li><Link to="/maker">⚙️ Maker</Link></li>
            <li><Link to="/breaker">🎯 Breaker</Link></li>
            <li><Link to="/login">🛂 Login</Link></li>
            <li><Link to="/history">📋 Histórico</Link></li>
          </ul>
        </nav>

        <div className="container">
          <Routes>
            <Route path="/maker" element={<Maker />} />
            <Route path="/breaker" element={<Breaker />} />
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/history" element={<History />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}


export default App;
