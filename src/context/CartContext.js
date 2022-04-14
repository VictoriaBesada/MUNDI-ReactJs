// import React from 'react';
// import { createContext, useState } from "react";

// const CartContext = createContext(null);

// const CartProvider = ({children}) => {

//     const [cartProducts, setCartProducts] = useState([]);

//     const addProduct = (item, count) => {
//         if(cartProducts.some(e => e.id === item.id)){
            
//             let index = cartProducts.findIndex(e => e.id === item.id);
//             let product = cartProducts[index];
//             product.count = product.count + count;

//             const newCart = [...cartProducts];
//             newCart.splice( index, 1, product );

//             setCartProducts([ ...newCart ]);

//         }else{
//             let product = {...item, count};
//             setCartProducts([...cartProducts, product ]);
//         }
//     }



//     const deleteProduct = (id) => {
//         const newCart = [...cartProducts];
//         let index = newCart.findIndex(e => e.id === id);
        
//         newCart.splice( index, 1 );

//         setCartProducts([...newCart]);
//     }

//     const emptyCart = () => {
//         setCartProducts([])
//     }

//     const data = {
//         cartProducts,
//         setCartProducts,
//         addProduct,
//         deleteProduct,
//         emptyCart
//     }

//     return (
//         <CartContext.Provider value={data}>
//             {children}
//         </CartContext.Provider>
//     )
// }

// export { CartProvider };
// export default CartContext;


import React from 'react';
import { createContext, useState } from "react";

const CartContext = createContext(null);


const CartProvider = ({children}) => {
    const [cartProducts, setCartProducts] = useState([])

    const addProductToCart = (product) => {
        let exist = cartProducts.find(cartProduct => cartProduct.id === product.id)
        !exist && setCartProducts(cartProducts => [...cartProducts, product])
    }

    const calculeTotalPrice = () => {
        let total = 0

        cartProducts.map( (cartProduct) => {
           total = cartProduct.price + total
        })

        return total
    }

    const deleteProduct = (product) => {
        setCartProducts(cartProducts.filter( cartProduct => cartProduct.id !== product.id))
    }

    const data = {
        cartProducts,
        addProductToCart,
        calculeTotalPrice,
        deleteProduct
    }

    return(
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export { CartProvider }
export default CartContext