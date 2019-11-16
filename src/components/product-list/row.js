import React, { useState } from 'react';
import styled from 'styled-components';
import setQuantity from 'lib/setQuantity';

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
  const [quantity, setSelectedQuantity] = useState(1);

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
        onChange={e => {
          setQuantity({
            setFunction: setSelectedQuantity,
            value: e.target.value,
          });
        }}
      />
      <button
        style={{ marginLeft: '10px' }}
        onClick={() =>
          quantity.length !== 0 &&
          parseInt(quantity) > 0 &&
          onSelect({ product, quantity })
        }
      >
        Add
      </button>
    </Row>
  );
};

export default Component;
