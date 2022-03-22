import React from 'react';
import './CartWidget.css';
import { BsCartPlus } from 'react-icons/bs';

class CartWidget extends React.Component {
  render() {
    return <h3><BsCartPlus /></h3>
  }
}

export default CartWidget;
