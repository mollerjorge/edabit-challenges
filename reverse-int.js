// Create a function that takes an integer n and reverses it.
function rev(n) {
  arr = [];
  Array.from(n.toString()).forEach(l => {
    arr.unshift(l);
  });
  return arr.join('').replace('-', '');
}
