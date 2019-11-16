import _ from 'lodash';
import React from 'react';
import BasketRow from './row/';

const Component = ({ selectedProducts, onRemove }) => (
  <div>
    <h2>My basket</h2>
    {_.map(selectedProducts, (quantity, productId) => (
      <BasketRow
        productId={productId}
        quantity={quantity}
        onClick={product => onRemove(product)}
      />
    ))}
  </div>
);

export default Component;
