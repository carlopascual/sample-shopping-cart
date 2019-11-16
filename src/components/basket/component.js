import _ from 'lodash';
import React from 'react';
import BasketRow from './row/';
import styled from 'styled-components';

const Outline = styled.div`
  display: grid;
  border-radius: 5px;

  h2 {
    margin: 0;
  }

  .basket {
    border: 1px solid black;
    border-top: none;
  }

  .first {
    border-top: 1px solid black;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }

  .last {
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }
`;

const Component = ({ selectedProducts, onRemove }) => (
  <Outline>
    {Object.keys(selectedProducts).length <= 0 && (
      <h3 style={{ margin: 0, fontWeight: '400' }}>
        Your Basket is currently empty.
      </h3>
    )}
    {_.map(Object.entries(selectedProducts), ([productId, quantity], index) => (
      <BasketRow
        className={`basket ${index === 0 ? 'first' : ''} ${
          index === Object.keys(selectedProducts).length - 1 ? 'last' : ''
        }`}
        productId={productId}
        quantity={quantity}
        onClick={product => onRemove(product)}
      />
    ))}
  </Outline>
);

export default Component;
