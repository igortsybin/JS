import once from './once';
import noop from './noop';

export default (coll, iteratee, callback = noop) => {
  const oncedCallback = once(callback);
  if (coll.length === 0) {
    return callback(null);
  }
  let completed = 0;
  const cb = (err, fn) => {
    console.log(fn);
    if (err) {
      return oncedCallback(err, fn);
    }
    console.log(`No error, completed = ${completed}`);
    completed += 1;
    // outputResult.push(result);
    if (completed === coll.length) {
      oncedCallback(null, fn);
    }
  };
  coll.filter(item => iteratee(item, cb));
};
