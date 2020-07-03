import React, { Component } from 'react';
import LoginApp from './components/login/app_login.js'
import RegApp from './components/Reg/Reg.js';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <div>
              <Route exact={true} path="/" component={LoginApp} />
              <Route path="/home" component={RegApp} />
          </div>
      </BrowserRouter>
    
    );
  }
}
export default App;

