import React from 'react';

const Component = ({ product, quantity, onClick = () => {} }) => (
  <div>
    <div>{product.name}</div>
    <div>quantity:</div>
    <input style={{ display: 'block' }} value={quantity} />
    <button onClick={() => onClick(product)}>remove</button>
  </div>
);

Component.displayName = 'BasketRowComponent';
export default Component;
