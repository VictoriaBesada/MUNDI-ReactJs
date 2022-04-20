// import React, { useState, useContext, useEffect } from 'react';
// import './ItemCount.css';
// import { GrAdd } from 'react-icons/gr';
// import { IoRemove } from 'react-icons/io5';
// import Button from '@mui/material/Button';
// import CartContext from '../../context/CartContext';
// import { useNavigate } from 'react-router-dom';


// function ItemCount({ stock, item }) {
//     const [count, setCount] = useState(1);
//     const cartContext = useContext(CartContext);
//     const { addProductToCart } = cartContext;

//     useEffect( () => {
//         addProductToCart()
//     })

//     const addStock = () => {

//         if (count < stock) {
//             setCount(count + 1)
//         }
//     }

//     const removeStock = () => {

//         setCount(count - 1)

//     }

//     const navegar = useNavigate();

//     const comprar = () => {
//         navegar(`/CarritoPage`)
//     }

//     const onAdd = (count) => {
//         addProductToCart(item, count);
//         console.log(`Agregaste ${count} pasajeros a tu viaje!`);
//     }

//     return (
//         <div>
//             <div className='contador' style={{display:'flex', justifyContent:'center', margin:'1rem'}}>
//                 <button onClick={addStock}><GrAdd /></button>
//                 <p style={{margin:'1rem'}}>Pasajeros: {count}</p>
//                 <button onClick={removeStock} disabled={count <= 1 ? true : null}><IoRemove /></button>
//             </div>
//             <div>
//                 <Button variant="contained" style={{ backgroundColor: '#C5ACF7', color: 'white' }} onClick={() => { onAdd(count); comprar() }}>Agregar al carrito</Button>
//             </div>
//         </div>

//     )
// }

// export default ItemCount;

import React,{useState} from 'react'
const ItemCount = ({stock}) => {
    const [count, setCount] = useState(1)

    const onAdd = () => {
        if(count < stock) {
            setCount(count + 1)
        }
    }
    return(
        <>
            <button>-</button>
            <p>{count}</p>
            <button onClick={onAdd}>+</button>
        </>
    )
}

export default ItemCount