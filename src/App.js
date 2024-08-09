import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AddUser from './components/AddUser';
import ViewUsers from './components/ViewUsers';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Add User</Link>
            </li>
            <li>
              <Link to="/view-users">View Users</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<AddUser />} />
          <Route path="/view-users" element={<ViewUsers />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
