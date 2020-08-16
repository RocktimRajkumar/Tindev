import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Header from './Header'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route path='/' exact>
            {/* Tinder Card */}
          </Route>
          <Route path='/chat'>
            {/* Chat Screen */}
          </Route>
        </Switch>

        {/* Button at bottom */}
        {/* Individual Chat Screen */}
      </Router>

    </div >
  );
}

export default App;
