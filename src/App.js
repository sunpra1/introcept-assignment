import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import HomePage from './components/pages/Home/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AppContext from './components/context/App';

function App() {
  return (
    <AppContext>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
      </Router>
    </AppContext>
  );
}

export default App;