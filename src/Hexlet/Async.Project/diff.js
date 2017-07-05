import fs from 'fs';

const compare = (data1, data2) => {
  const lines1 = data1.split('\n').slice(0, -1);
  const lines2 = data2.split('\n').slice(0, -1);
  console.log('file1 =', lines1);
  // BEGIN (write your solution here)
  const [bigest, smallest, order] = lines1.length > lines2.length ?
   [lines1, lines2, true] : [lines2, lines1, false]; // lines1 bigger for true
  return bigest.reduce((acc, line, index) => {
    if (smallest.length <= index) {
      return [...acc, order ? [line, null] : [null, line]];
    }
    if (smallest[index] !== line) {
      return [...acc, order ? [line, smallest[index]] : [smallest[index], line]];
    }
    return acc;
  }, []);

  // END
};
const editPath = path => 'src/Hexlet/Async.Project/'.concat(path);

// BEGIN (write your solution here)
export default function deff(part1, part2, callback) {
  const fileEncoding = 'utf8';
  fs.readFile(editPath(part1), fileEncoding, (err, data1) => {
    if (!err) {
      fs.readFile(editPath(part2), fileEncoding, (err2, data2) => {
        if (!err2) {
          // compare(data1, data2);
          callback(err2, compare(data1, data2));
        } else callback(err2);
      });
    } else callback(err);
  });
}
// console.log(deff('__test__/fixtures/file4', '__test__/fixtures/file3'), (err, data) => {
//   console.log(data);
// });
// END
