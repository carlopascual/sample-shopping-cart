import React, { useState } from 'react';
import styled from 'styled-components';
import isAllowableInteger from 'lib/isAllowableInteger';

const Row = styled.div`
  align-items: center;
  padding: 20px;
  border: 1px solid black;
  border-radius: 5px;

  h2 {
    margin: 0;
  }

  p {
    margin: 0;
  }
`;

const Quantity = styled.h5`
  font-size: 12px;
  margin: 0;
`;

const Component = ({ product, onSelect = () => {} }) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <Row>
      <div style={{ marginBottom: '20px' }}>
        <h2 key={product._id} onClick={() => onSelect(product)}>
          {product.name}
        </h2>
        <p>{`Ahh, yes. Good ole' fashioned ${product.name}.`}</p>
      </div>
      <Quantity style={{ marginBottom: '4px' }}>Choose quantity:</Quantity>
      <input
        value={quantity}
        onChange={e =>
          (e.target.value.length === 0 || isAllowableInteger(e.target.value)) &&
          setQuantity(parseInt(e.target.value))
        }
      />
      <button
        style={{ marginLeft: '10px' }}
        onClick={() => quantity.length !== 0 && onSelect({ product, quantity })}
      >
        Add
      </button>
    </Row>
  );
};

export default Component;
