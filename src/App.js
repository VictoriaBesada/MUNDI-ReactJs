import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/Navbar/NavBar';
import PageNotFound from './pages/PageNotFound';
import Home from './pages/HomePage';
import Contact from './pages/ContactPage';
import Nosotros from './pages/NosotrosPage';
import Carrito from './pages/CarritoPage';
import Footer from './components/Footer/Footer';
import DetailPage from './pages/ItemDetailPage';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/NosotrosPage" element={<Nosotros />} />
            <Route path="/" element={<Home />} />
            <Route path="/HomePage" element={<Home/>} />
            <Route path="/ContactPage" element={<Contact />} />
            <Route path="/CarritoPage" element={<Carrito />} />
            <Route path="/:category/" element={<Home />} />
            <Route path="/:category/:id" element={<DetailPage />} />
            <Route path= "*" element={<PageNotFound />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </CartProvider>
    </div>
  )
}

export default App;
