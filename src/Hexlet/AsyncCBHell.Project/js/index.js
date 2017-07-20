// () => window.alert('hello World');
const counter = fn => {
  console.log('Hi');
  return (...args) => {
    console.log('inside function');
    return fn(...args);
  };
};
const arr = [1, 2, 3];
counter((arr, count) => arr.length > 0 ? arr[0] : arr[1]);
