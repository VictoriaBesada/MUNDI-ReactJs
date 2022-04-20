import React, { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { getProductById } from '../../data/getProducts';
import mockProducto from '../../utils/productMock';
const ItemDetailContainer = () => {

    // const [product, setProduct] = useState([null])

    // useEffect(() => {
    //     getProductById(Number(id), setProduct);
    // }, [id]);

    const [dataProduct, setDataProduct] = useState({})

    const getProduct = () => {
        return new Promise((resolve, reject) => {
            return resolve(mockProducto)
        })
    }

    useEffect( () => {
        getProduct().then( (producto) => {
            setDataProduct(producto)
            //console.log("Llamada al mock:", producto)
        }).finally( () => {
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