import React, { useState } from 'react';
import './ItemCount.css';
import { GrAdd } from 'react-icons/gr';
import { IoRemove } from 'react-icons/io5';


function ItemCount({stock}) {
    const [count, setCount] = useState(1);

    const onAdd = () => {

        if(count < stock){
            setCount(count + 1)
        }
    }

    const removeStock = () => {

        setCount(count - 1)
        
    }

    return (
        <div className='contador'>
            <button onClick={onAdd}><GrAdd/></button>
            <p>Pasajeros: {count}</p>
            <button onClick={removeStock} disabled={count <=1 ? true : null}><IoRemove/></button>
        </div>
    )
}

export default ItemCount;