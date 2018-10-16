import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home1 from './pages/home/home1.js';
import Nav from './components/Nav/nav.js';
import Home2 from './pages/home/home2.js';
import Home3 from './pages/home/home3.js';
import Thoughts1 from './pages/thoughts/thoughts1.js';
import Thoughts3 from './pages/thoughts/thoughts3';
import Results1 from './pages/results/results1.js';





ReactDOM.render(
   
  <BrowserRouter>
    <div>
    <Nav></Nav>
      <Switch>
       {/*  /* IMPORTANT! add any other routes ABOVE the home1 Route !*/ }
       <Route path="/results1" component={Results1} />
       <Route path="/thoughts3" component={Thoughts3} />
       <Route path="/thoughts1" component={Thoughts1} />
       <Route path="/home3" component={Home3} />
       <Route path="/home2" component={Home2} />
       <Route exact path="/" component={Home1} />        
      </Switch>
    </div> 
  </BrowserRouter>,
  document.getElementById('root')
)
