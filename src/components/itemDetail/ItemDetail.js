import React, {useContext} from 'react';
import CartContext from '../../context/CartContext';
import ItemCount from '../ItemCount/ItemCount';


const ItemDetail = ({ item }) => {

  const cartContext = useContext(CartContext);
  const { addProduct } = cartContext;

  const onAdd = (count) => {
    addProduct(item, count);
    console.log(`Agregaste ${count} pasajeros a tu viaje!`);
  }
  return (
    <div className="card-item" style={{margin:'3rem'}} >
      <h1>{item.titulo}</h1>
      <img src={item.imagen} alt='imagen' style={{width:'50%', borderRadius:'25px'}}/>
      <div className='container-card-data' style={{ marginBottom: '1rem', border: 'none' }}>
        <p>Precio: USD {item.precio}</p>
        <p>Descripcion: {item.descripcion}</p>
        <p>Itinerario: {item.itinerario}</p>
        <ItemCount stock={item.stock} onAdd={onAdd} />
      </div>
    </div>
  )
}

export default ItemDetail;
