import React from 'react';

const Component = ({ product, quantity }) => (
  <div>
    {product.name} : {quantity}
  </div>
);

Component.displayName = 'ProductComponent';
export default Component;
