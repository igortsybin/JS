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
const each = (coll, iteratee, callback = noop) => {
  const oncedCallback = once(callback);
  if (coll.length === 0) {
    return callback(null);
  }
  let completed = 0;
  const cb = (err, result) => {
    if (err) {
      return oncedCallback(err);
    }
    completed += 1;
    // outputResult.push(result);
    if (completed === coll.length) {
      oncedCallback(null);
    }
  };
  coll.forEach(item => iteratee(item, cb));
};

export default concat (coll, iteratee, callback = noop) => {
  
  each(coll, iteratee, callback = noop);

}

// END
