import React, { useState, useEffect } from 'react'
import Item from '../Item/Item'
import { useParams } from 'react-router-dom'
import CircularProgress from '@mui/material/CircularProgress';
import { collection, getDocs } from 'firebase/firestore'
import db from '../../firebase';

const ItemList = ({ children }) => {

    const [loading, setLoading] = useState(true)
    const { category } = useParams()
    const [products, setProducts] = useState([])


    useEffect(() => {
        setProducts([])
        setLoading(true)
        getProducts().then((productos) => {
            setLoading(false)
            category ? filterProductByCategory(productos, category) : setProducts(productos)
        })
    }, [category])

    const getProducts = async () => {
        const itemsCollection = collection(db, 'productos')
        const productosSnapshot = await getDocs(itemsCollection)
        const productList = productosSnapshot.docs.map((doc) => {
            let product = doc.data()
            product.id = doc.id
            console.log("product:", product)
            return product
        }
        )
        return productList
    }


    const filterProductByCategory = (array, category) => {
        return array.map((product, i) => {
            if (product.category === category) {
                return setProducts(products => [...products, product]);
            }
        })
    }

    return (
        <div>
            <div className='container-cards' style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridGap: '10px' }}>
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