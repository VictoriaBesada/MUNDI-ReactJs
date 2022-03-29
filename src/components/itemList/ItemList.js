import React, { useEffect, useState } from 'react';
import Item from '../item/Item';
import './ItemList.css';



const ItemList = () => {

    const listaDeProductos = [
    {
        titulo: 'Nueva York',
        imagen: 'NuevaYork.webp',
        descripcion: 'Pasaje aéreo, ruta: Buenos Aires / New York / Buenos Aires. Taslados de llegada y salida. 14 noches de alojamiento en The New Yorker a Wyndham Hotel 3*. Asistencia al viajero con seguro de cancelación.',
        precio: 15000,
        id: 1,
        stock: 52,
    },
    {
        titulo: 'Machu Picchu',
        imagen: 'MachuPicchu.jpeg',
        descripcion: 'Aéreo LATAM. Traslados en destino en privado. 7 noches en el Hotel con desaryuno y almuerzo incluido. Seguro Flight Plus. Asistencia al viajero con seguro de cancelación.',
        precio: 12000,
        id: 2,
        stock: 34,
    },
    {
        titulo: 'Barcelona',
        imagen: 'Barcelona.jpeg',
        descripcion: 'Traslados de llegada y salida. Guías locales en español en todas las visitas. Bus de lujo y guía acompañante durante todo el recorrido en bus.Asistencia al viajero con seguro de cancelación.',
        precio: 6000,
        id: 3,
        stock: 73,
    },
    {
        titulo: 'Phuket',
        imagen: 'Phuket.jpeg',
        descripcion: 'Vuelos Internacionales. Traslados en destino. Guía de habla hispana. 12 noches en EcoLoft Hotel 3* all inclusive. Excursiones. Asistencia al viajero con seguro de cancelación.',
        precio: 10000,
        id: 4,
        stock: 98,
    }
    ]

    const [productos, setProductos] = useState([])

    const getProductos = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(listaDeProductos);
            }, 2000);
        })
    }

    useEffect ( () => {
        getProductos().then( (productos) =>{
            setProductos(productos)
        })
    })

    return(
        <div className="product-list-container">
            {productos.map( (producto) =>{
                return (
                    <div key={producto.id}>
                      <Item
                        titulo={producto.titulo}
                        descripcion={producto.descripcion}
                        precio={producto.precio}
                        imagen={producto.imagen}
                        stock={producto.stock}
                        id={producto.id}
                      />
                    </div>
                  );
            })}
        </div>
    )
}

export default ItemList;