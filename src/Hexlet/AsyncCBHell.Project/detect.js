// import noop from './noop';
import once from './once';

// BEGIN
// export default (coll, fn, callback) => {
//   const oncedCallback = once(callback);
//   let completed = 0;
//   if (coll.length === 0) {
//     callback(null);
//     return;
//   }

//   const cb = (err, result) => {
//     completed += 1;
//     if (!err || completed === coll.length) {
//       oncedCallback(err, result);
//     }
//   };

//   coll.forEach(item => fn(item, cb));
// };
// // EN

export default (coll, iteratte, callback) => {
  const oncedCallback = once(callback);
  if (coll.length === 0) {
    oncedCallback(null, coll);
  }
  let completed = 0;
  let endOfArray = 0;
  let error;
  const cb = (err, item) => {
    console.log(item);
    endOfArray += 1;
    if (err) {
      error = err;
      // callback(err);
      // return;
    } else {
      completed += 1;
    }
    if (completed === 1) {
      oncedCallback(null, item);
    } else if (endOfArray === coll.length) {
      oncedCallback(error);
    }
  };
  coll.forEach(item => iteratte(item, cb));
};
