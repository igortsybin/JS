export default (countErr, ...functions) => {
  if (functions.length === 0) {
    return console.log('No functions');
  }
  let count = countErr === 0 ? 5 : countErr;
  const next = ([head, ...rest], previousresult) => {
    // console.log('Function  = ', head);
    const cb = (err, ...args) => {
      if (err && count !== 0) {
        console.log('previousresult = ', previousresult);
        // console.log('count = ', count);
        count -= 1;
        return head(...previousresult, cb);// head(...previousresult, cb);
      }
      if (rest.length === 0) {
        console.log('No more functions');
      } else {
        next(rest, args);
      }
    };
    head(...previousresult, cb);
  };
  next(functions, []);
}
// export default (functions, callback) => {
//   if (functions.length === 0) {
//     return callback();
//   }

//   const next = ([head, ...rest], previousresult) => {
//     const cb = (err, ...args) => {
//       if (err) {
//         return callback(err, args);
//       } else {
//         next(rest, args);
//       }
//     };
//     head(...previousresult, cb);
//   };
//   next(functions, []);
// }
