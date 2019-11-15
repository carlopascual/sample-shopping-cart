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
