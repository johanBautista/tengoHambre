import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NuevaCuenta from './components/auth/NuevaCuenta';
import Login from './components/auth/Login';
import Reserva from './components/Reserva';
// import './normalize.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/nueva-cuenta" component={NuevaCuenta} />
        <Route exact path="/reserva" component={Reserva} />
      </Switch>
    </Router>
  );
}

export default App;
