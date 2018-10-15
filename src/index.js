import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom';
import Home1 from './pages/home/home1.js';


ReactDOM.render(
  <BrowserRouter>
    <div>
      Header Placeholder...
      <Route path="/" component={Home1} />
    </div>
  </BrowserRouter>,
  document.getElementById('root')
)
