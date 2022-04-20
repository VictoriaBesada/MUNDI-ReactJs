import React from 'react';
// import { useParams } from 'react-router-dom';
// import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer';

// const DetailPage = () => {
//   let { id } = useParams();

//   return (
//     <main>
//       <ItemDetailContainer id={id} />
//     </main>
//   );
// };

// export default DetailPage;

import Container from '@mui/material/Container';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { doc, getDoc } from "firebase/firestore";
import db from '../firebase'

const DetailPage = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [product, setProduct] = useState({})
    const getProduct = async() => {
        const docRef = doc(db, "productos", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            let product = docSnap.data()
            product.id = docSnap.id
            setProduct(product)
          } else {
            console.log("No such document!");
            navigate('/error')
          }
    }

    useEffect( () => {
        getProduct()
    }, [id])
    
    return(
        <Container className='container-general'> 
            <div className='container-detail'>
            <div className='container-detail__img'>
                <img src={product.imagen} alt="producto" />
            </div>
            <div className='container-detail__info'>
                <h3 className='info__title'>{product.titulo}</h3>
                <p className='info__text'>$ {product.precio}</p>
                <p className='info__subtitle'>Descripcion</p>
                <p className='info__text'>{product.descripcion}</p>
                <p className='info__subtitle'>Itinerario</p>
                <p className='info__text detail__text'>{product.itinerario}</p>
                <Button className='detail__btn-buy'>COMPRAR</Button>
            </div>
            </div>
        </Container>
    )
}

export default DetailPage;