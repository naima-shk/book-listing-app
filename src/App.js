import './App.css';

import React from 'react';

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import Books from './component/Books';
import Home from './component/Home';
import Login from './component/Login';

function App() {
  return (
    <Router>
   <div>
    
      <Home/>
      <Books/>
      <Login/>
     
      </div>
      <Switch>



<Route path="/home">
  <Home />
</Route>
<Route path="/login">
  <Login />
</Route>
<Route path="/Books">
  <Books />
</Route>

</Switch>
      </Router>
  );
}

export default App;


