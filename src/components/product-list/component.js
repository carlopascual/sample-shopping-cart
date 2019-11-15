import _ from 'lodash';
import React from 'react';
import { withProps } from 'recompose';

const Component = ({ products, onSelect = () => {} }) =>
  _.map(products, product => (
    <h4 key={product._id} onClick={() => onSelect(product)}>
      {product.name}
    </h4>
  ));

export default Component;
