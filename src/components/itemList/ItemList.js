// import React, { useEffect, useState } from 'react';
// import Item from '../Item/Item';
// import { getAllProductsFromDB } from '../../data/getProducts';
// import CircularProgress from '@mui/material/CircularProgress';
// import './ItemList.css';


// const ItemList = () => {

//   const [products, setProducts] = useState([])


//   useEffect(() => {
//     getAllProductsFromDB(setProducts);
//   }, []);

//   return (
//     <div className="product-list-container">
//       {products.length ? (
//         <>
//           {products.map((product) => {
//             return (
//               <div key={product.id}>
//                 <Item
//                   titulo={product.titulo}
//                   imagen={product.imagen}
//                   precio={product.precio}
//                   stock={product.stock}
//                   id={product.id}
//                 />
//               </div>
//             );
//           })}
//         </>
//       ) : (
//         <div className='container-progress'><CircularProgress /></div>
//       )}
//     </div>
//   )
// }

// export default ItemList;

import React,{useState, useEffect} from 'react'
import Item from '../Item/Item'
import { useParams } from 'react-router-dom'
import CircularProgress from '@mui/material/CircularProgress';
import { getAllProductsFromDB } from '../../data/getProducts';
// import { collection, getDocs, query, where } from 'firebase/firestore'


const ItemList = ({children}) => {
    const [loading , setLoading] = useState(true)
    const { category } = useParams()
    const [products, setProducts] = useState([])
    

    useEffect( () => {
        setProducts([])
        setLoading(true)
        getAllProductsFromDB().then(productos => {
            setLoading(false)
            category ? filterProductByCategory(productos, category) : setProducts(productos)
        })
    }, [category])

    const filterProductByCategory = (array , category) => {
        return array.map( (product, i) => {
            if(product.category == category) {
               return setProducts(products => [...products, product]);
            }
        })
    }

    return(
        <div>
            <div className='container-cards' style={{display:'grid',  gridTemplateColumns: 'repeat(3, 1fr)', gridGap: '10px'}}>
            {loading ? 
                (<div className='container-progress'><CircularProgress /></div>) 
            : 
                (
                  <> {products.map(product =>  
                      <Item data={product} key={product.id} />
                    )} 
                  </>
                )
            }
            </div>
        </div>
    ) 
}

export default ItemList;