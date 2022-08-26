const max = function (...values) {
  return values.reduce((large, current) => (large > current ? large : current), values[0]);
};
console.log(max(2, 1, 7, 4));