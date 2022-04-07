import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { useNavigate } from 'react-router-dom'
import './Item.css';


const Item = (item) => {

  const navigate = useNavigate();

  const changePage = () => {
    navigate(`/products/${item.id}`)
  }


  return (
    <div className="card-item">
      <img src={item.imagen} alt='' />

      <div className='container-card-data'>
        <h2>{item.titulo}</h2>
        <p>Precio : USD {item.precio}</p>
        <a onClick={changePage} style={{ textDecoration: 'underline', fontWeight: 'bold' }}>Ver itinerario</a>
        <ItemCount stock={item.stock} />
      </div>
    </div>
  );
};

export default Item;



