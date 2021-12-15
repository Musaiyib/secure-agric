import { useEffect, useState } from 'react';
import './App.scss';
import Navbar from './components/navbar/Navbar.jsx'
import Home from './components/home/Home.jsx'
import Contact from './components/contact/Contact.jsx';
import Products from './components/products/Products.jsx';
import Member from './components/members/Member';
import About from './components/about/About';

function App() {

  const [menuOpen, setMenuOpen] = useState(false)
  const [home, setHome] = useState(false)
  const [about, setAbout] = useState(false)
  const [products, setProducts] = useState(false)
  const [member, setMember] = useState(false)
  const [contact, setContact] = useState(false)
  useEffect(() => {
    setHome(true)
    setAbout(true)
    setProducts(true)
    setMember(true)
    setContact(true)
  }, [])
  return (
    <div className="app">
      <Navbar setMenuOpen={setMenuOpen} menuOpen={menuOpen} />
      <div className="section" onClick={() => setMenuOpen(false)}>
        <span id="home"></span>
        <span id="home"></span>
        {home && <Home />}
        <span id="about"></span>
        {about && <About />}
        <span id="products"></span>
        {products && <Products />}
        <span id="members"></span>
        {member && <Member />}
        {contact && <Contact />}
      </div>
    </div>
  );
}

export default App;
