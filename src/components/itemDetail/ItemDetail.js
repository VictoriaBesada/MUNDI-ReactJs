import React from 'react';
import ItemCount from '../itemCount/ItemCount';
import Button from '@mui/material/Button';

const ItemDetail = ({ item }) => {

  return (
    <div className="card-item">
      <img src={`./${item.imagen}`} alt='' />
      <div className='container-card-data'>
        <h2>{item.titulo}</h2>
        <p>Precio: USD {item.precio}</p>
        <p>Descripcion: {item.descripcion}</p>
        <p>Itinerario: {item.itinerario}</p>
        <ItemCount stock={item.stock} />
        <Button variant="contained">Agregar al carrito</Button>
      </div>
    </div>
  )
}

export default ItemDetail;
