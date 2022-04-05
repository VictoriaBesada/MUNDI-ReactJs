import React from 'react';
import { useParams } from 'react-router-dom';
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer';

const DetailPage = () => {
  let { id } = useParams();

  return (
    <main>
      <h1>Detalle de producto</h1>
      <ItemDetailContainer id={id} />
    </main>
  );
};

export default DetailPage;
