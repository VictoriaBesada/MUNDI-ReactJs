import React, { useEffect, useState } from 'react';
import Item from '../item/Item';
import { getAllProductsFromDB } from '../../data/getProducts'
import './ItemList.css';



const ItemList = () => {

  const [products, setProducts] = useState([])


  useEffect(() => {
    getAllProductsFromDB(setProducts);
  }, []);


  return (
    <div className="product-list-container">
      {products.length ? (
        <>
          {products.map((product) => {
            return (
              <div key={product.id}>
                <Item
                  titulo={product.titulo}
                  imagen={product.imagen}
                  precio={product.precio}
                  stock={product.stock}
                  id={product.id}
                />
              </div>
            );
          })}
        </>
      ) : (
        <p>Cargando destinos...</p>
      )}
    </div>
  )
}

export default ItemList;