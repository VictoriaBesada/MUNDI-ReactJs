import React from 'react';
import { useState, useContext } from 'react'
import Container from '@mui/material/Container';
import { Button } from '@mui/material';
import CartContext from '../context/CartContext';
import DeleteIcon from '@mui/icons-material/Delete';
import ModalCustom from '../components/Modal/Modal';
import db from '../firebase'
import { addDoc, collection } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

const CartPage = () => {

    const { cartProducts, deleteProduct, totalPrice } = useContext(CartContext)
    const [openModal, setOpenModal] = useState(false)
    const navigate = useNavigate();

    const changePage = () => {
        navigate(`/HomePage`)
    }

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
    })

    const [order, setOrder] = useState(
        {
            buyer: formData,
            items: cartProducts.map((cartProduct) => {
                return {
                    id: cartProduct.id,
                    title: cartProduct.titulo,
                    price: cartProduct.precio
                }
            }),
            total: totalPrice
        }
    )
    
    const [successOrder, setSuccessOrder] = useState()

    const handleSubmit = (e) => {
        e.preventDefault()
        let prevOrder = {
            ...order,
            buyer: formData
        }
        setOrder({
            ...order,
            buyer: formData
        })
        pushOrder(prevOrder)
    }

    const pushOrder = async (prevOrder) => {
        const orderFirebase = collection(db, 'ordenes')
        const orderDoc = await addDoc(orderFirebase, prevOrder)
        console.log("orden generada: ", orderDoc.id)
        setSuccessOrder(orderDoc.id)

    }

    const handleChange = (e) => {
        const { value, name } = e.target
        console.log("value: ", value)
        console.log("name: ", name)

        setFormData({
            ...formData,
            [name]: value
        })
    }

    return (
        <Container className='container-general carritoFinal'>
            <div className='cart-section'>
                <div className='col-cart-table__head'>
                    <h2>Destino</h2>
                    <h2>Nombre del paquete</h2>
                    <h2>Precio por pax</h2>
                    <h2>Cantidad</h2>
                    <h2>Eliminar</h2>
                </div>
                {cartProducts.map((cartProduct) => {
                    const { precio, imagen, titulo, id } = cartProduct
                    return (
                        <div className='cart-table__content' key={id}>
                            <div className='cart-table__content-img'>
                                <img src={imagen} />
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
                    <Button className='btn-custom' onClick={changePage}>Continuar comprando</Button>
                    <div className='cart-checkout-details'>
                        <div className='cart-checkout__subtotal'>
                            <p>Subtotal</p>
                            <span>$ {totalPrice}</span>
                        </div>
                        <div className='cart-checkout__total'>
                            <p>Total</p>
                            <span>$ {totalPrice}</span>
                        </div>
                        <Button className='btn-custom-compra' onClick={() => setOpenModal(true)}>Finalizar compra</Button>
                    </div>
                </div>
            </div>
            {console.log("Order:", order)}
            <ModalCustom handleClose={() => setOpenModal(false)} open={openModal}>

                {successOrder ? (
                    <div className='ordenGenerada'>
                        <img src={'logo.png'} className='logo' />
                        <h3>Orden generada correctamente</h3>
                        <p>Su numero de orden es: {successOrder}</p>
                        <p>Muchas gracias por confiar en nosotros!</p>
                    </div>
                ) : (
                    <>  <div className='modalCarrito'>
                        <h2>Ingrese sus datos:</h2>
                        <form onSubmit={handleSubmit}>
                            <input type="text" name='name' placeholder='Nombre'
                                onChange={handleChange}
                                value={formData.name}
                            />
                            <input type="number" name='phone' placeholder='Telefono'
                                onChange={handleChange}
                                value={formData.phone}
                            />
                            <input type="mail" name='email' placeholder='Email'
                                onChange={handleChange}
                                value={formData.email}
                            />

                            <Button className='botonFinal' type="submit">Enviar</Button>
                        </form>
                    </div>
                    </>
                )}

            </ModalCustom>
        </Container>
    )
}

export default CartPage