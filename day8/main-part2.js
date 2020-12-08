const fs = require('fs');

// chopping txt file
const input = fs.readFileSync('input.txt', 'utf8');

const lines = input.split(/\r?\n/);
// console.log(lines.length);

const accumulatorCounter = (lines) => {
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

    if (index === lines.length) {
      return accumulator;
    }
  }

  return false;
};

for (let i = 0; i < lines.length; i++) {
  const [operation, argument] = lines[i].split(' ');
  let answer = false;
  let copyLines = [...lines];

  if (operation === 'nop') {
    copyLines[i] = `jmp ${argument}`;

    answer = accumulatorCounter(copyLines);
  }

  if (operation === 'jmp') {
    copyLines[i] = `nop ${argument}`;
    answer = accumulatorCounter(copyLines);
  }

  if (answer) {
    console.log(answer);
  }
}

// console.log(accumulatorCounter(lines));
