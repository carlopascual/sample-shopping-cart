import React, { useState } from 'react';
import { Header } from 'components/ui-elements';
import ProductList from 'components/product-list';
import Basket from 'components/basket';
import { selectProduct } from './actions';

const Component = () => {
  const [selectedProducts, setSelectedProducts] = useState({});

  return (
    <>
      {JSON.stringify({ selectedProducts, setSelectedProducts })}
      <Header />
      <Basket selectedProducts={selectedProducts} />
      <ProductList
        onSelect={product => {
          selectProduct({ product, selectedProducts, setSelectedProducts });
        }}
      />
    </>
  );
};

export default Component;
