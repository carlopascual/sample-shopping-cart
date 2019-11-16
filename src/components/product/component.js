import React from 'react';

const Component = ({ product, quantity, onClick = () => {} }) => (
  <div onClick={() => onClick(product)}>
    {product.name} : {quantity}
  </div>
);

Component.displayName = 'ProductComponent';
export default Component;
