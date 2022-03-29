import React from 'react';
import ItemList from '../itemList/ItemList';
import './ItemListContainer.css';

const ItemListContainer = () => {
  return (
    <section className="item-list-container">
      <h2 className="item-list-container__title">Destinos destacados</h2>
      <ItemList/>
    </section>
  );
};

export default ItemListContainer;
