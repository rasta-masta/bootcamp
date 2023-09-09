function filterPrimitives(arr) {
  return arr.filter((item) => {
    return (
      typeof item === 'number' ||
      typeof item === 'string' ||
      typeof item === 'boolean'||
      typeof item ===  null ||
      typeof item === undefined
    );

  });
}

const arr = [1, 'string', null, false, undefined, 2, 'yes', undefined];
const primitivesOnly = filterPrimitives(arr);

console.log(primitivesOnly);
console.log(typeof null);
console.log(typeof undefined);

const primitif = arr.slice()
console.log(primitif);



