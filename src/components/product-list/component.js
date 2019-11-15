import _ from 'lodash';
import React from 'react';
import { withProps } from 'recompose';

const Component = ({ items }) => _.map(items, item => <h4>{item.name}</h4>);

export default Component;
