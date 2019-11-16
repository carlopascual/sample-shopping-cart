import { compose } from 'recompose';
import { getProduct } from 'domain/products/actions';
import Component from './component';

export default compose(getProduct)(Component);
