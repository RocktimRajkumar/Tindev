import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Header from './Header'
import TinderCards from './TinderCards'
import SwipeButtons from './SwipeButtons'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>

        <Switch>
          <Route path='/' exact>
            <Header />
            <TinderCards />
            <SwipeButtons />
          </Route>
          <Route path='/chats'>
            <Header backButton='/' />
            <p>This is chat</p>
            {/* Chat Screen */}
          </Route>
        </Switch>
        {/* Individual Chat Screen */}
      </Router>

    </div >
  );
}

export default App;
