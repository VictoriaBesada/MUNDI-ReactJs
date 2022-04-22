import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function NavBar() {

  const navega = useNavigate();

  const home = () => {
  navega(`/HomePage`)
}

  return (
    <header className='header'>
      <div>
        <div id ="navigation">
          <ul>
            <li >
                <Link to={'/HomePage'} style={{color:'black', textDecoration:'none'}}>Home</Link>
            </li>
            <li>
                <Link to={'/NosotrosPage'} style={{color:'black', textDecoration:'none'}}>Nosotros</Link >
            </li>
            <li>
              <img src='/logo.png' className='logo' alt='logo' onClick={home}></img>
            </li>
            <li>
                <Link to={'/ContactPage'} style={{color:'black', textDecoration:'none'}}>Contacto</Link>
            </li>
            <li style={{ float: 'right' }}>
                <Link to={'/CarritoPage'} style={{color:'black', textDecoration:'none'}}>
                  <CartWidget/>
                  </Link >
            </li>
          </ul>
          <div className='animation start-home'></div>
        </div>
      </div>
    </header>
  )
}

export default NavBar;
