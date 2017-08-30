import once from './once';
import noop from './noop';

export default (coll, iteratee, callback = noop) => {
  const oncedCallback = once(callback);
  if (coll.length === 0) {
    return callback(null);
  }
  let completed = 0;
  const cb = (err) => {
    if (err) {
      return oncedCallback(err);
    }
    console.log(`No error, completed = ${completed}`);
    completed += 1;
    // outputResult.push(result);
    if (completed === coll.length) {
      oncedCallback(null);
    }
  };
  coll.forEach(item => iteratee(item, cb));
};
