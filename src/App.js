import { useState } from 'react';
import './App.scss';
import Navbar from './components/navbar/Navbar.jsx'
import Home from './components/home/Home.jsx'
import Contact from './components/contact/Contact.jsx';
import Products from './components/products/Products.jsx';
import Member from './components/members/Member';
import About from './components/about/About';

function App() {
  
  return (
    <div className="app">
      <Navbar />
      <div className="section">
        <span id="home"></span>
        <span id="home"></span>
        <Home />
        <span id="about"></span>
        <About />
        <span id="products"></span>
        <Products />
        <span id="members"></span>
        <Member />
        <Contact />
      </div>
    </div>
  );
}

export default App;
