const noop = (...args) => {};

const once = (fn) => {
  let called = false;

  return (...args) => {
    if (called) return;
    called = true;
    fn(...args);
  };
};

// BEGIN (write your solution here)
export default (coll, iteratee, callback = noop) => {
  const oncedCallback = once(callback);
  if (coll.length === 0) {
    return callback(null);
  }
  let completed = 0;
  let outputResult = [];
  const cb = (err, result) => {
    console.log(result);
    if (err) {
      return oncedCallback(err);
    }
    completed += 1;
    outputResult.push(result);
    if (completed === coll.length) {
      oncedCallback(null, result);
    }
  };
  coll.forEach(item => iteratee(item, cb));
};

// END
