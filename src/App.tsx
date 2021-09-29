import React from 'react';

import './App.css';
import Register from './pages/Register/Register';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './pages/Login/Login';
import Navigation from './components/Navbar/Navbar';
import ProtectedRoute from './features/protectedRoute';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <ProtectedRoute exact path='/'>
            <div className="registerContainer">
              <h1>Home</h1>
            </div>
          </ProtectedRoute>
          <Route exact path='/register'>
            <div className="registerContainer">
              <Register />
            </div>
          </Route>

          <Route exact path='/login'>
            <div className="registerContainer">
              <Login />
            </div>
          </Route>
        </Switch>
        <h2>Footer</h2>
      </Router>
    </div>
  );
}

export default App;
