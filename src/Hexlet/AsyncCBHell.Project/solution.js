export default (functions, callback) => {
  if (functions.length === 0) {
    return callback();
  }

  const next = ([head, ...rest], previousresult) => {
    const cb = (err, ...args) => {
      if (err) {
        return callback(err, args);
      } else {
        next(rest, args);
      }
    };
    head(...previousresult, cb);
  };
  next(functions, []);
}

