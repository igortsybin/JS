// BEGIN (write your solution here)
export default (coll, fn, callback) => {
  if (coll.length === 0) {
    callback(coll);
    return;
  }
  const iter = ([head, ...rest], acc) => {
    const filtered = !isNaN(head) || head || head !== '' ? fn(head) : [];
    const newAcc = [...acc, filtered];
    console.log(newAcc);
    if (rest.length === 0) {
      callback(newAcc);
      return;
    }
    setTimeout(iter, 0, rest, newAcc);
  };

  iter(coll, []);
};
// END
