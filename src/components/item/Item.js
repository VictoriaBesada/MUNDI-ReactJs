import React from 'react';
import ItemCount from '../itemCount/ItemCount';
import './Item.css';

const Item = ({ titulo, descripcion, precio, imagen, id, stock }) => {

  return (
    <div className="card-item">
      <img src={`./${imagen}`} alt={imagen} />

      <div className='container-card-data'>
        <h2>{titulo}</h2>
        <p>Precio : $ {precio}</p>
        <p>Descripcion : {descripcion}</p>
        <a href='#'>Ver itinerario</a>
        <ItemCount stock={stock} />
        <button>Comprar</button>
      </div>
    </div>
  );
};

export default Item;



