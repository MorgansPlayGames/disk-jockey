
import './App.css';
import Home from './pages/Home';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';






function App() {
  
  return (
    <Router>
      <Switch>
        <Route exact path="/" render={(props) => (
          <Home {...props} />
        )}
        />
        
      </Switch>
    </Router>
  );
}

export default App;
