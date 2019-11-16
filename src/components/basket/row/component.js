import React, { useState } from 'react';
import styled from 'styled-components';

const Outline = styled.div`
  padding: 20px;

  h3 {
    margin: 0px;
  }
`;

const Quantity = styled.h5`
  font-size: 12px;
  margin: 0;
`;

const Component = ({ product, quantity, onClick = () => {}, className }) => {
  const [selectedQuantity, setSelectedQuantity] = useState(quantity);
  const [isEditing, setEditing] = useState(false);
  return (
    <Outline className={className}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <h3>
          {product.name} ({quantity})
        </h3>
        {!isEditing && (
          <button
            style={{ background: 'black', color: 'white', marginLeft: '20px' }}
            onClick={() => setEditing(true)}
          >
            Edit
          </button>
        )}
      </div>
      {isEditing && (
        <div style={{ marginTop: '20px' }}>
          <Quantity style={{ marginBottom: '4px' }}>Your quantity:</Quantity>
          <input value={selectedQuantity} />
          <button
            style={{ background: 'black', color: 'white', marginLeft: '10px' }}
            onClick={() => onClick(product)}
          >
            Save
          </button>
        </div>
      )}
    </Outline>
  );
};

Component.displayName = 'BasketRowComponent';
export default Component;
