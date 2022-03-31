import React, {useEffect, useState} from 'react';
import './ItemDetailContainer.css';
import ItemDetail from '../itemDetail/ItemDetail';
import { getProductById } from '../../data/getProducts'

const ItemDetailContainer = ({id}) => {

    const [product, setProduct] = useState([null])

    useEffect(() => {
        getProductById(Number(id), setProduct);
        console.log(product);
    }, [id]);

    return(
        <div className="detail-list-container">
            <section className="item-detail-container">
                {product ? <ItemDetail item={product} /> : <p>Buscando tu viaje...</p>}
            </section>
        </div>
    )
};

export default ItemDetailContainer;
