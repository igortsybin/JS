import fs from 'fs';

const compare = (data1, data2) => {
  const lines1 = data1.split('\n').slice(0, -1);
  const lines2 = data2.split('\n').slice(0, -1);
  // console.log('file1=', lines1);
  // console.log('file2=', lines2);
  // BEGIN (write your solution here)
  return lines1; // return just for test;

  // return lines1.length === lines2.length &&
  // lines1.every((element, index) => element === lines2[index]);
  // END
};
const editPath = path => 'src/Hexlet/Async.Project/'.concat(path);

// BEGIN (write your solution here)
export default function (part1, part2) {
  const fileEncoding = 'utf8';
  fs.readFile(editPath(part1), fileEncoding, (err, data1) => {
    if (!err) {
      fs.readFile(editPath(part2), fileEncoding, (err2, data2) => {
        if (!err2) {
          console.log('!!!!!!!!!!!!!!!!');
          return compare(data1, data2);
          // callback(err2, compare(data1, data2));
        }
      });
    }
  });
}
// END
