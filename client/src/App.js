import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from "./pages/Home";





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
