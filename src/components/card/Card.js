import React from 'react';
import ItemCount from '../itemCount/ItemCount';
import './Card.css';


export default function Card(props) {

    return (

        <div id="container">
            <div className="product-details">

                <h2>{props.title}</h2>
                <span className="hint-star star">
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                </span>
                <p>Duracion: {props.duracion}</p>
                <div className='contador'>
                    <p><ItemCount/></p>
                </div>
                <div className="control">
                    <button className="btn">
                        <span className="price">USD {props.precio}</span>
                        <span className="shopping-cart"><i className="fa fa-shopping-cart" aria-hidden="true"></i></span>
                        <span className="buy">Comprar</span>
                    </button>
                </div>

            </div>

            <div className="product-image">

                <img src="https://imageio.forbes.com/blogs-images/trevornace/files/2015/11/beautiful-places-world-1200x900.jpg?fit=bounds&format=jpg&width=960" alt=""></img>


                <div className="info">
                    <h2> Servicios incluidos:</h2>
                    <ul>
                        {props.servicios}
                    </ul>
                </div>
            </div>

        </div>



    )
}