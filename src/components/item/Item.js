import React from 'react';
import ItemCount from '../itemCount/ItemCount';
import Button from '@mui/material/Button';
import './Item.css';


const Item = (item) => {

  const addToCart = (e) => {
    e.stopPropagation()
    console.log('agregar al carrito')
  }

  return (
    <div className="card-item" >
      <img src={item.imagen} alt='' />

      <div className='container-card-data'>
        <h2>{item.titulo}</h2>
        <p>Precio : USD {item.precio}</p>
        <a href='#'>Ver itinerario</a>
        <ItemCount stock={item.stock} />
        <Button variant="contained" onClick={addToCart}>Agregar al carrito</Button>
      </div>
    </div>
  );
};

export default Item;



