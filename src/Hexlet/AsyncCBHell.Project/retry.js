export default (countErr, fn, outerCallback) => {
  let count = countErr === 0 ? 5 : countErr;
  const cb = (err, result) => {
    count -= 1;
    if (!err || count === 0) {
      outerCallback(err, result);
    } else {
      fn(cb);
    }
  };
  fn(cb);
};
