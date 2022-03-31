import React from 'react';
import CartWidget from '../cartWidget/CartWidget';
import './NavBar.css';
import { Link } from 'react-router-dom';


export default NavBar;

function NavBar() {
  return (
    <header className='header'>
      <div>
        <div id ="navigation">
          <ul>
            <li >
                <Link to={'/Home'} style={{color:'black', textDecoration:'none'}}>Home</Link>
            </li>
            <li>
                <Link to={'/Nosotros'} style={{color:'black', textDecoration:'none'}}>Nosotros</Link >
            </li>
            <li>
              <img src='/logo.png' className='logo'></img>
            </li>
            <li>
                <Link to={'/Destinos'} style={{color:'black', textDecoration:'none'}}>Destinos</Link >
            </li>
            <li>
                <Link to={'/Contact'} style={{color:'black', textDecoration:'none'}}>Contacto</Link>
            </li>
            <li style={{ float: 'right' }}>
                <Link to={'/Carrito'} style={{color:'black', textDecoration:'none'}}><CartWidget/></Link >
            </li>
          </ul>
          <div className='animation start-home'></div>
        </div>
      </div>
    </header>
  )
}
