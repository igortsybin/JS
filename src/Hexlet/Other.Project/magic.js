// BEGIN (write your solution here)

let sum = 0;
const magic = function (...args) {
  sum = args.reduce((acc, elem) => acc += elem, sum);
  console.log(sum);
  magic.valueOf = () => sum;
  return magic;
}
module.exports = magic;

// END
