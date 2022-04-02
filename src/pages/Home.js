import { Container } from '@mui/material';
import React from 'react';
import ItemListContainer from '../components/itemListContainer/ItemListContainer';
import ItemDetailContainer from '../components/itemDetailContainer/ItemDetailContainer'



const Home = () => {
    return(
        <Container className='container-general'>
            <ItemListContainer/>
            <ItemDetailContainer id={1}/>
        </Container>
    )
}

export default Home;