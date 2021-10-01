import './App.css';
import  Home from '../src/pages/Home/Home'
import Register from './pages/Register/Register';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './pages/Login/Login';
import Navigation from './components/Navbar/Navbar';

import Footer from './components/Footer/Footer';
import UserProfile from './pages/UserProfile/UserProfile';
import Album from './pages/Album/Album';

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

          <Route exact path="/userprofile/:uid">
              <UserProfile />
          </Route>
          <Route exact path="/userprofile/:userid/album/:albumid">
              <Album />
          </Route>

        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
