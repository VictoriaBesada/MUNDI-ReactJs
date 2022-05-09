import React, { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import mockProducto from '../../utils/productMock';

const ItemDetailContainer = () => {

    const [dataProduct, setDataProduct] = useState({})

    const getProduct = () => {
        return new Promise((resolve, reject) => {
            return resolve(mockProducto)
        })
    }

    useEffect(() => {
        getProduct().then((producto) => {
            setDataProduct(producto)
        }).finally(() => {
            console.log("Termino la llamada")
        })
    }, [])

    return (
        <div>
            <section>
                {product ? <ItemDetail item={product} /> : <p>Buscando tu viaje...</p>}
            </section>
        </div>
    )
};

export default ItemDetailContainer;