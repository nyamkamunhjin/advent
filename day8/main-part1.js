const fs = require('fs');

// chopping txt file
const input = fs.readFileSync('input.txt', 'utf8');

const lines = input.split(/\r?\n/);
// console.log(lines.length);

let accumulator = 0;
let index = 0;
let checkDup = [];
while (!checkDup.includes(index)) {
  checkDup.push(index);

  const [operation, argument] = lines[index].split(' ');

  if (operation === 'nop') {
    index++;
  }

  if (operation === 'acc') {
    accumulator += parseInt(argument, 10);
    index++;
  }

  if (operation === 'jmp') {
    index += parseInt(argument, 10);
  }
}

console.log(accumulator);
