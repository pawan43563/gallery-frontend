import React from 'react';
import  Home from '../src/pages/Home/Home'

import './App.css';
import Register from './pages/Register/Register';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './pages/Login/Login';
import Navigation from './components/Navbar/Navbar';
import ProtectedRoute from './features/protectedRoute';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div >
      <Router>
        <Navigation />
        <Switch>
          <Route exact path='/'>
             <Home />
          </Route>
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
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
