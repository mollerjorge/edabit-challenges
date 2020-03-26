// Create a function that takes an array of names and returns an array with only the first letter capitalized.
function capMe(arr) {
  arr2 = arr.map(name => {
    firstChar = name[0].toUpperCase();
    return (
      firstChar +
      Array.from(name)
        .splice(1)
        .join('')
        .toLowerCase()
    );
  });
  return arr2;
}
