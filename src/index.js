import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home1 from './pages/home/home1.js';
import Home2 from './pages/home/home2.js';



ReactDOM.render(
  <BrowserRouter>
    <div>
      <Switch>
       {/*  /* IMPORTANT! add any other routes ABOVE the home1 Route !*/ }
       <Route path="/" component={Home2} />
       <Route path="/" component={Home1} />
       
        
      </Switch>
    </div>
  </BrowserRouter>,
  document.getElementById('root')
)
