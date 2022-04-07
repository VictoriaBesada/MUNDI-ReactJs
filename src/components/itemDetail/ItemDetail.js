import React from 'react';
import ItemCount from '../ItemCount/ItemCount';


const ItemDetail = ({ item }) => {

  const onAdd = (count) => {
    console.log(`Agregaste ${count} pasajeros a tu viaje!`);
  }
  return (
    <div className="card-item" >
      <img src={item.imagen} alt='imagen' style={{ size: '2rem' }} />
      <div className='container-card-data' style={{ marginBottom: '1rem', border: 'none' }}>
        <h2>{item.titulo}</h2>
        <p>Precio: USD {item.precio}</p>
        <p>Descripcion: {item.descripcion}</p>
        <p>Itinerario: {item.itinerario}</p>
        <ItemCount stock={item.stock} onAdd={onAdd} />
      </div>
    </div>
  )
}

export default ItemDetail;
