import React from "react";
import {faTimes} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Cart = ({ item, deleteProduct }) => {
    return (
        <article className="cart-item-card">
            <div className="cart-item__delete" onClick={()=>deleteProduct(item.id)}>
                <FontAwesomeIcon icon={faTimes} color={'#1d1d1d'} size={'1x'}/>
            </div>
            <div className="cart-item__img">
                <img src={item.imagen} alt='img del destino'/>
            </div>
            <h2 className="cart-item__name">{item.titulo}</h2>
            <span className="cart-item__price">${item.precio}</span>
            <span className="cart-item__qty"><strong>Cantidad:</strong> {item.count}</span>
            <span className="cart-item__qty"><strong>Total:</strong> ${item.count * item.precio}</span>
        </article>
    )
}

export default Cart;
