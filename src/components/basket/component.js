import _ from 'lodash';
import React from 'react';
import Product from 'components/product';

const Component = ({ selectedProducts, onRemove }) => (
  <div>
    <h2>My basket</h2>
    {_.map(selectedProducts, (quantity, productId) => (
      <Product
        onClick={product => onRemove(product)}
        productId={productId}
        quantity={quantity}
      />
    ))}
  </div>
);

export default Component;
