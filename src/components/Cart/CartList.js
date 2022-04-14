import React, { useContext } from 'react'
import CartContext from '../../context/CartContext';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';
import Cart from './Cart';

const CartList = () => {

    const cartContext = useContext(CartContext);
    const { cartProducts, deleteProduct, emptyCart } = cartContext;

    return (
        <section className="list-cart-container" >
            {cartProducts ? (cartProducts.map(product => {
                console.log(product.id)
                return (
                        <Cart 
                            key={product.id}
                            item={product}
                            deleteProduct={deleteProduct}
                        />
                );
                }))
                : <div className='container-progress'><CircularProgress /></div>
            }
            {cartProducts.length ? (<Button
                variant="contained" style={{ backgroundColor: '#EF9A9A', color: 'white', margin:'1rem' }}
                onClick={emptyCart}>Vaciar Carrito</Button>)
                : <p>No hay viajes en el carrito</p>
            }
        </section>
    )
}


export default CartList;
