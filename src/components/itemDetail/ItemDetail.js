import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import Button from '@mui/material/Button';

const ItemDetail = ({ item }) => {
  
  return (
    <div className="card-item" >
      <img src={item.imagen} alt='imagen' style={{size:'2rem'}}/>
      <div className='container-card-data' style={{marginBottom:'1rem', border:'none'}}>
        <h2>{item.titulo}</h2>
        <p>Precio: USD {item.precio}</p>
        <p>Descripcion: {item.descripcion}</p>
        <p>Itinerario: {item.itinerario}</p>
        <ItemCount stock={item.stock} />
        <Button variant="contained" style={{backgroundColor:'#C5ACF7', color:'white'}}>Agregar al carrito</Button>
      </div>
    </div>
  )
}

export default ItemDetail;
