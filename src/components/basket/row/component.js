import React from 'react';

const Component = ({ product, quantity, onClick = () => {} }) => (
  <div onClick={() => onClick(product)}>
    <div>{product.name}</div>
    <div>{`quantity: ${quantity}`}</div>
  </div>
);

Component.displayName = 'BasketRowComponent';
export default Component;
