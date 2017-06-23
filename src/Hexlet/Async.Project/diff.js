import fs from 'fs';
console.log('yes');
const compare = (data1, data2) => {
  const lines1 = data1.split('\n').slice(0, -1);
  const lines2 = data2.split('\n').slice(0, -1);

  // BEGIN (write your solution here)
  
  // END
};

// BEGIN (write your solution here)
export default function (part1, part2, callback) {
  this.readFile('./etc', (err, data) => {
    if (err) throw err;
    console.log(data);
  });
}
// END