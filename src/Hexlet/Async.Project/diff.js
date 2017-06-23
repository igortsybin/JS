import fs from 'fs';

const compare = (data1, data2) => {
  const lines1 = data1.split('\n').slice(0, -1);
  const lines2 = data2.split('\n').slice(0, -1);

  // BEGIN (write your solution here)
  
  // END
};
const editPath = path => 'src/Hexlet/Async.Project/'.concat(path);

// BEGIN (write your solution here)
export default function (part1, part2, callback) {
  const fileEncoding = 'utf8';
  fs.readFile(editPath(part1), fileEncoding, callback);
}
// END