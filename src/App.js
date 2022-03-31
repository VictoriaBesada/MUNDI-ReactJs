import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/navbar/NavBar';
import PageNotFound from './pages/PageNotFound';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Nosotros from './pages/Nosotros';
import Destinos from './pages/Destinos';
import Carrito from './pages/Carrito';
import Footer from './components/footer/Footer';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/Nosotros' element={<Nosotros />} />
          <Route path='/' element={<Home />} />
          <Route path='/Destinos' element={<Destinos />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Carrito' element={<Carrito />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
