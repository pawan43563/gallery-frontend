import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import './App.css';
import AppRouter from './AppRouter/AppRouter';

import  Home from '../src/pages/Home/Home'

import './App.css';

function App() {
  return (
    <BrowserRouter>
        <div className="App">
            <AppRouter />
            
        </div>

    </BrowserRouter>
      
  );
}

export default App;
