import _ from 'lodash';
import React from 'react';
import styled from 'styled-components';
import ProductRow from './row';

const Outline = styled.div`
  display: grid;
  grid-gap: 20px;
`;

const Component = ({ products, onSelect }) => (
  <Outline>
    {_.map(products, product => (
      <ProductRow product={product} onSelect={onSelect} />
    ))}
  </Outline>
);

export default Component;
