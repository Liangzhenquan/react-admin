import React from 'react';
import { Route, Switch } from 'react-router'
import { BrowserRouter, Link } from 'react-router-dom'
import Login from './pages/login'
import 'normalize.css'
function Home() {
  return (
    <span>123</span>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact={true} component={Home}></Route>
        <Route path='/login' exact={true} component={Login}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
