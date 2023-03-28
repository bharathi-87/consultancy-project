import logo from './logo.svg';
import React from 'react';
import './App.css';
import Header from './header';
import Login from './register';
import Cart from './cart';
import Page from './page';
import Home from './home';
import Signin from './signin';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header/>
      <Router>
    <Routes>
    
    
      <Route path='/' element={<Login/>}></Route>
      <Route path='/cart' element={<Cart/>}></Route>
      <Route path='/page' element={<Page/>}></Route>
      <Route path='/signin' element={<Signin/>}></Route>
    </Routes>
    </Router>
    </div>
  );
}

export default App;
