import { compose } from 'recompose';
import { getProducts } from 'domain/products/actions';
import Component from './component';

export default compose(getProducts)(Component);
