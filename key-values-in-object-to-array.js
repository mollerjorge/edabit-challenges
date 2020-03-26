// Write a function that converts an object into an array of keys and values.
function objectToArray(obj) {
  arr = [];
  for (key in obj) {
    arr.push([key, obj[key]]);
  }
  return arr;
}

// another solution
function objectToArray(obj) {
  return Object.entries(obj);
}
