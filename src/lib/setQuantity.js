import isAllowableInteger from './isAllowableInteger';

export default ({ setFunction, value }) => {
  if (value.length <= 0) {
    setFunction(0);
  }

  if (isAllowableInteger(value)) {
    setFunction(parseInt(value));
  }
};
