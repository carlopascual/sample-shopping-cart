// Checks to make sure the the string is an integer and is not too big.
export default value => /^\d+$/.test(value) && value.length <= 5;
