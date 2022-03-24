import React, { useState } from 'react';
import './ItemCount.css';
import { GrAdd } from 'react-icons/gr';
import { IoRemove } from 'react-icons/io5';



function ItemCount() {
    const [count, setCount] = useState(1);
    const [stock, setStock] = useState(10);

    const onAdd = () => {

        if(count < stock){
            setCount(count + 1)
        }
    }

    const removeStock = () => {

        if(count > 1){
            setCount(count - 1)
        }
    }

    return (
        <div className='contador'>
            <button onClick={onAdd}><GrAdd/></button>
            <p>Cantidad: {count}</p>
            <button onClick={removeStock}><IoRemove/></button>
        </div>
    )
}

export default ItemCount;