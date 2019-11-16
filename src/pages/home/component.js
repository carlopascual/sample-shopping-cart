import React, { useState } from 'react';
import { Header } from 'components/ui-elements';
import ProductList from 'components/product-list';
import Basket from 'components/basket';
import { selectProduct, removeSelectedProduct } from './actions';

const Component = () => {
  const [selectedProducts, setSelectedProducts] = useState({});

  return (
    <>
      <Header />
      <h2>Your basket</h2>
      <Basket
        selectedProducts={selectedProducts}
        onRemove={product => {
          removeSelectedProduct({
            product,
            selectedProducts,
            setSelectedProducts,
          });
        }}
      />
      <h2>Product List</h2>
      <ProductList
        onSelect={({ product, quantity }) => {
          selectProduct({
            product,
            quantity,
            selectedProducts,
            setSelectedProducts,
          });
        }}
      />
    </>
  );
};

export default Component;
