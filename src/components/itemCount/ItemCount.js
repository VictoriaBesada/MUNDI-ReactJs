import React, { useState } from 'react';
import './ItemCount.css';
import { GrAdd } from 'react-icons/gr';
import { IoRemove } from 'react-icons/io5';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';


function ItemCount({ stock }) {
    const [count, setCount] = useState(1);

    const addStock = () => {

        if (count < stock) {
            setCount(count + 1)
        }
    }

    const removeStock = () => {

        setCount(count - 1)

    }

    const navegar = useNavigate();

    const comprar = () => {
        navegar(`/CarritoPage`)
    }

    const onAdd = (count) => {
        console.log(`Agregaste ${count} pasajeros a tu viaje!`);
    }

    return (
        <div>
            <div className='contador'>
                <button onClick={addStock}><GrAdd /></button>
                <p>Pasajeros: {count}</p>
                <button onClick={removeStock} disabled={count <= 1 ? true : null}><IoRemove /></button>
            </div>
            <div>
                <Button variant="contained" style={{ backgroundColor: '#C5ACF7', color: 'white' }} onClick={() => { onAdd(count); comprar() }}>Agregar al carrito</Button>
            </div>
        </div>

    )
}

export default ItemCount;