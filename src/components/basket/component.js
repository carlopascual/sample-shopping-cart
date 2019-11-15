import _ from 'lodash';
import React from 'react';
import Product from 'components/product';
const Component = ({ selectedProducts }) => (
  <div>
    <h2>My basket</h2>
    {_.map(selectedProducts, (quantity, productId) => (
      <Product productId={productId} quantity={quantity} />
    ))}
  </div>
);

export default Component;
