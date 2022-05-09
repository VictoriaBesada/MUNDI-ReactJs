import React from 'react';
import { Container } from '@mui/material';
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';

const Home = () => {
    return(
        <Container className='container-general'>
            <ItemListContainer/>
        </Container>
    )
}

export default Home;