import React from 'react';

import { Navbar } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom';

import Intro from './component/About';
import BookList from './component/BookList';
import Home from './component/Home';
import Login from './component/Login';

function App(){
return(
<>
<Router>
      <div>
      
         <Navbar bg="dark">
         <div className="indigo">
          <Navbar.Brand style={{color:'#C89D7C'}} as={Link} to="/">Home</Navbar.Brand>
          <Navbar.Brand style={{color:'#C89D7C'}} as={Link} to="/Home">Click to Continue</Navbar.Brand>
          </div>
        </Navbar>
     
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
         <Switch>
           
           <Route path="/Home">
             <Home />
           </Route>
           <Route path="/Login">
             <Login />
            </Route>
            <Route path="/BookList">
             <BookList />
            </Route>
            <Route path="/About">
             <Intro />
            </Route>
            <Route path="/">
             <Intro />
            </Route>
           
         </Switch>
       </div>
     </Router>
  
</>


)};

export default App;