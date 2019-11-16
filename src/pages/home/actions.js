import _ from 'lodash';

export const selectProduct = ({
  product,
  selectedProducts,
  setSelectedProducts,
}) => {
  if (!selectedProducts[product._id]) {
    setSelectedProducts({ ...selectedProducts, [product._id]: 1 });
    return;
  }

  setSelectedProducts({
    ...selectedProducts,
    [product._id]: (selectedProducts[product._id] += 1),
  });
};

export const removeSelectedProduct = ({
  product,
  selectedProducts,
  setSelectedProducts,
}) => {
  if (selectedProducts[product._id] - 1 === 0) {
    setSelectedProducts(_.omit(selectedProducts, product._id));
    return;
  }

  setSelectedProducts({
    ...selectedProducts,
    [product._id]: (selectedProducts[product._id] -= 1),
  });
};
