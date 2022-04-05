import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/Navbar/NavBar';
import PageNotFound from './pages/PageNotFound';
import Home from './pages/HomePage';
import Contact from './pages/ContactPage';
import Nosotros from './pages/NosotrosPage';
import Destinos from './pages/DestinosPage';
import Carrito from './pages/CarritoPage';
import Footer from './components/Footer/Footer';
import DetailPage from './pages/ItemDetailPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/NosotrosPage' element={<Nosotros />} />
          <Route path='/' element={<Home />} />
          <Route path='/DestinosPage' element={<Destinos />} />
          <Route path='/ContactPage' element={<Contact />} />
          <Route path='/CarritoPage' element={<Carrito />} />
          <Route path='/:products/' element={<Home/>} />
          <Route path='/:products/:id' element={<DetailPage/>}/>
          <Route path='*' element={<PageNotFound />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App;
