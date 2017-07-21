import each from './each';

// BEGIN (write your solution here)
export default (coll, fn, callback) => {
  let outputArray = [];
  const filterInner = (item, callbackInner) => {
    fn(item, (err, filteredItem) => {      
      outputArray = coll.filter(callbackInner);
      callbackInner(err);
    });
  };

  each(coll, filterInner, (err) => {
    callback(err, outputArray);
  });
};

// END
