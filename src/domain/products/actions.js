import _ from 'lodash';
import { withProps } from 'recompose';
import availableItems from './available-items.json';

export const getProducts = withProps({
  // this can eventually be replaced with a database query
  products: availableItems,
});

export const getProduct = withProps(({ productId }) => ({
  // this can eventually be replaced with a database query
  product: _.find(availableItems, item => item._id === productId),
}));
