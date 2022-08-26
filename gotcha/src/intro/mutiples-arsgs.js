function max(...values) {
  console.log(values instanceof Array);
  let large = values[0];
  
  for (const value in values) {
    if (value > large) {
      large = value;
    }
  }
  return large;
}
console.log(max(2, 1, 7, 4));
