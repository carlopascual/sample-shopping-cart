import { withProps } from 'recompose';
import availableItems from './available-items.json';

export const getProducts = withProps({
  // this can eventually be replaced with a database query
  items: availableItems,
});
