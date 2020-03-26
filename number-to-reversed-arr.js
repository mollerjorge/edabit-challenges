// Create a function that takes a number and returns an array with the digits of the number in reverse order.
function reverseArr(num) {
  arr = [];
  Array.from(String(num)).forEach(l => {
    arr.unshift(parseInt(l));
  });
  return arr;
}
