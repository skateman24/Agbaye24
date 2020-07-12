import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


import Home from './Components/Home';
import About from './Components/About';
import HomePage from './Components/HomePage';

class Approot extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/about" component={About} />
            <Route path="/home" component={HomePage} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default Approot;