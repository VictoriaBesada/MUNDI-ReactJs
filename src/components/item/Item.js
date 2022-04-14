import React, { useContext} from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { useNavigate } from 'react-router-dom';
import CartContext from '../../context/CartContext';
import './Item.css';

export default function Item ({data}) {

  const navigate = useNavigate();
  const { cartProducts, addProductToCart } = useContext(CartContext)
  const { titulo, precio, stock, imagen, id, category } = data

  const changePage = () => {
    navigate(`/products/${id}`)
  }

  const onAdd = (e) => {
    e.stopPropagation()
    console.log("Productos agregados:", cartProducts) 
    addProductToCart(data)
  }

  return (
    <div className="card-item estilos" style={{margin:'2rem', border:'1px solid black', borderRadius: '25px', padding: '20px'}}>
      <img src={imagen} style={{borderRadius: '25px'}} alt='' />

      <div className='container-card-data' style={{textAlign:'center'}}>
        <h2>{titulo}</h2>
        <h3>Turismo: {category}</h3>
        <p>Precio : USD {precio}</p>
        <button onClick={changePage} style={{ textDecoration: 'underline', fontWeight: 'bold', border:'none', backgroundColor:'white' }}>Ver itinerario</button>
        <ItemCount stock={stock} onClick={onAdd}/>
      </div>
    </div>
  );
};