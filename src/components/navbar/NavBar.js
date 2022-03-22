import React from 'react';
import CartWidget from '../cartWidget/CartWidget';
import './NavBar.css';

export default NavBar;

function NavBar() {
  return (
    <header className='header'>
      <nav>
        <a href="#">Home</a>
        <a href="#">Nosotros</a>
        <a href="#">Destinos</a>
        <a href="#">Contacto</a>
        <a href="#"><CartWidget/></a>
        <div className='animation start-home'></div>
      </nav>
    </header>
  )
}
