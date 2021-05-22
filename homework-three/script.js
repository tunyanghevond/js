//page 64 xndir 23, 24 page 72 xndir 1,2,3

//Task xndir 23

const digit = function (n) {
  let y = n;
  while (y) {
    let digit = y % 10;
    y = Math.trunc(y / 10);
    console.log(digit);
  }
};
//digit(1);

//Task 24
const checkDigit = function (n) {
  let y = n;
  let n1;
  while (y) {
    let digit = y % 10;
    if (digit >= 5) {
      n1 = n;
      break;
    }
    y = Math.trunc(y / 10);

    if (y === 0) {
      n1 = n * 2;
    }
  }
  console.log(n1);
};
//checkDigit(1235);

//Task - 1
function y(x) {
  let y;
  for (let i = 1; i <= 8; i += 0.2) {
    if (x < 5) {
      y = 2 * x + 1;
    } else {
      y = x ** 2 - 1;
    }
  }
  console.log(y);
}

//y(3);

// Task - 2
function y(x) {
  let y;
  for (let i = 1; i <= 12; i++) {
    if (x < 3) {
      y = 5 * x + 2;
    } else if (x >= 3 && x <= 10) {
      y = x ** 2 + x - 1;
    } else {
      y = 1;
    }
  }
  console.log(y);
}
//y(2);
// Task - 3
function y(n) {
  let y = 0;
  for (let i = 1; i <= n; i++) {
    y += Math.sin(i) / Math.cos(i);
  }
  console.log(y);
}
//y(2);
