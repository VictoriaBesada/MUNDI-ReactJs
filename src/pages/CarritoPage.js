// import { Container } from '@mui/material';
// import React from 'react';
// import CartList from '../components/Cart/CartList';


// const Carrito = () => {
//     return(
//         <Container>
//             <h1>Carrito</h1>
//             <CartList/>
//         </Container>
//     )
// }

// export default Carrito;

import React, {useContext} from 'react';
import Container from '@mui/material/Container';
import { Button } from '@mui/material';
import CartContext from '../../src/context/CartContext';
import DeleteIcon from '@mui/icons-material/Delete';

const CartPage = () => {
    const { cartProducts, deleteProduct, calculeTotalPrice } = useContext(CartContext)

    console.log("cartProducts:", cartProducts)
    return(
        <Container className='container-general'> 
            <div className='cart-section'>
                <div className='col-cart-table__head'>
                    <h2>Producto</h2>
                    <h2>Descripcion</h2>
                    <h2>Precio Unitario</h2>
                    <h2>Cantidad</h2>
                    <h2>Quitar</h2>
                </div>
                {cartProducts.map( (cartProduct) => {
                    const { precio, imagen, titulo, id } = cartProduct
                    return(
                        <div className='cart-table__content' key={id}>
                            <div className='cart-table__content-img'>
                                <img src={`./${imagen}`} alt='imagen del destino' />
                            </div>
                            <div className='cart-table__content-title'>
                                <p>{titulo}</p>
                            </div>
                            <div className='cart-table__content-price'>
                                <p>$ {precio}</p>
                            </div>
                            <div className='cart-table__content-quantity'>
                                <p>1</p>
                            </div>
                            <div className='cart-table__content-price'>
                                <button className='btn-delete' onClick={() => deleteProduct(cartProduct)}>
                                    <DeleteIcon />
                                </button>
                            </div>
                        </div>
                    )
                })}
                
                <div className='cart-footer'>
                    <Button className='btn-custom'>Continuar comprando</Button>
                    <div className='cart-checkout-details'>
                        <div className='cart-checkout__subtotal'>
                            <p>Subtotal</p>
                            <span>$ {calculeTotalPrice}</span>
                        </div>
                        <div className='cart-checkout__total'>
                            <p>Total</p>
                            <span>$ {calculeTotalPrice}</span>
                        </div>
                        <Button className='btn-custom'>Completar Compra</Button>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default CartPage