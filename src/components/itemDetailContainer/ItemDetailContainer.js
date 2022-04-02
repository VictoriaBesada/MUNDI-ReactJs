import React, {useEffect, useState} from 'react';
import ItemDetail from '../itemDetail/ItemDetail';
import { getProductById } from '../../data/getProducts'

const ItemDetailContainer = ({id}) => {

    const [product, setProduct] = useState([null])

    useEffect(() => {
        getProductById(Number(id), setProduct);
        console.log(product);
    }, [id]);

    return(
        <div>
            <section>
                {product ? <ItemDetail item={product} /> : <p>Buscando tu viaje...</p>}
            </section>
        </div>
    )
};

export default ItemDetailContainer;
