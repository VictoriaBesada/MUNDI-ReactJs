import React, {useState, useEffect} from 'react';
import './App.css';
import NavBar from './components/navbar/NavBar';
import ItemListContainer from './components/itemListContainer/ItemListContainer';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer/>
    </div>
  );
}

export default App;
