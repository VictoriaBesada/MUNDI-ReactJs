import React from 'react';
import ItemCount from '../ItemCount/ItemCount';



const ItemDetail = ({ data }) => {

  return (
    <div className="card-item" style={{margin:'3rem'}} >
      <h1>{data.titulo}</h1>
      <img src={data.imagen} alt='imagen' style={{width:'50%', borderRadius:'25px'}}/>
      <div className='container-card-data' style={{ marginBottom: '1rem', border: 'none' }}>
        <p>Precio: USD {data.precio}</p>
        <p>Descripcion: {data.descripcion}</p>
        <p>Itinerario: {data.itinerario}</p>
        <ItemCount stock={data.stock}/>
      </div>
    </div>
  )
}

export default ItemDetail;
