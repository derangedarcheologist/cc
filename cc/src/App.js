import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './home';
import Dashboard from './dashboard';
import Login from './login';

function App() {
  return (
    <Router>
      <Routes>
        <div>
          <Route path="/" exact component={Home} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/login" component={Login} />
        </div>
      </Routes>  
    </Router>
  );
}

export default App;
