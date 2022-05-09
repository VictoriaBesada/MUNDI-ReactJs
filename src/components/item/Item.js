import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CartContext from '../../context/CartContext';
import Button from '@mui/material/Button';
import './Item.css';

export default function Item({ data }) {

  const { cartProducts, addProductToCart } = useContext(CartContext)
  const { titulo, precio, stock, imagen, id, category } = data
  const navigate = useNavigate();

  const changePage = () => {
    navigate(`/productos/${id}`)
  }

  const onAdd = (e) => {
    e.stopPropagation()
    console.log("Productos agregados:", cartProducts)
    addProductToCart(data)
  }

  useEffect(() => {

    console.log("cartProducts:", cartProducts)

    const onScrollWindow = () => {
      if (window.scrollY > 100) {
        console.log("Scroll mayor a 100")
      }
    }

    window.addEventListener("scroll", onScrollWindow)

    return () => {
      window.removeEventListener("scroll", onScrollWindow)
    }

  }, [])

  return (
    <div className="card-item estilos">
      <div className='card-item__img'>
        <img src={imagen} alt='' />
      </div>
      <div className='container-card-data' style={{ textAlign: 'center' }}>
        <h2>{titulo}</h2>
        <h3>Turismo: {category}</h3>
        <p>Precio : USD {precio}</p>
        <button onClick={changePage} style={{ textDecoration: 'underline', fontWeight: 'bold', border: 'none', backgroundColor: 'white', margin: '1rem' }}>Ver servicios incluidos</button>
        <Button onClick={onAdd} className="btn-custom">Agregar al carrito</Button>
      </div>
    </div>
  );
};