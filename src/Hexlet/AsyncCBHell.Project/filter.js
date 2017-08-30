import noop from './noop';

export default (coll, iteratee, callback = noop) => {
  if (coll.length === 0) {
    return callback(null, coll);
  }
  let completed = 0;
  const newArray = [];
  const cb = (item, index, err, truthValue) => {
    // console.log(item);
    if (err) {
      return callback(null, coll);
    }
    
    if (truthValue) {
      // newArray = newArray.concat(coll[completed]);
      // newArray = newArray.concat(item);
      newArray[index] = item;
    }
    completed += 1;
    // const results = coll.filter(); // how to use 
    if (completed === coll.length) {
      const results = newArray.filter(elem => !!elem);
      callback(err, results);
    }
  };
  coll.forEach((item0, index) => iteratee(item0, cb.bind(null, item0, index)));
};
