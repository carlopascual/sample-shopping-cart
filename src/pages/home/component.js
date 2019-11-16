import React, { useState } from 'react';
import { Header } from 'components/ui-elements';
import ProductList from 'components/product-list';
import Basket from 'components/basket';
import { selectProduct, removeSelectedProduct } from './actions';

const Component = () => {
  const [selectedProducts, setSelectedProducts] = useState({});

  return (
    <>
      {JSON.stringify({ selectedProducts, setSelectedProducts })}
      <Header />
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
