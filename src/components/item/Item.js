import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom'
import './Item.css';


const Item = (item) => {

  const navigate = useNavigate();

  const addToCart = (e) => {
    e.stopPropagation()
    console.log('agregar al carrito')
  }

  const changePage = () => {
    navigate(`/products/${item.id}`)
  }


  return (
    <div className="card-item">
      <img src={item.imagen} alt='' />

      <div className='container-card-data'>
        <h2>{item.titulo}</h2>
        <p>Precio : USD {item.precio}</p>
        <a onClick={changePage} style={{textDecoration:'underline', fontWeight:'bold'}}>Ver itinerario</a>
        <ItemCount stock={item.stock} />
        <Button variant="contained" onClick={addToCart} style={{backgroundColor:'#C5ACF7', color:'white'}}>Agregar al carrito</Button>
      </div>
    </div>
  );
};

export default Item;



