//page 42 xndir 12, 13, 14, 15, 16, 21.

// Task - 12

const amount = function () {
  let n = +prompt("Enter a number", "5");
  let sum = 0;
  if (n < 0) {
    n = +prompt("Enter a number", "");
  }
  for (let i = 0; i <= n; i++) {
    sum += i ** 2;
  }
  console.log(sum);
};
//amount();

// Task - 13

const taskTwo = function () {
  let n = +prompt("Enter a number", "");
  let y = 1;
  for (let i = 0; i < n; i++) {
    y = y * 2;
  }
  console.log(y);
};
//taskTwo();

// Task - 14
const taskThree = function () {
  let a = +prompt("Enter a A number", "");
  let sum = 0;
  for (let i = 1; i <= a; i++) {
    sum += i ** 2;
  }
  console.log(sum);
};
//taskThree();

// Task - 15
const taskFour = function () {
  let n = +prompt("Enter a A number", "");
  let s = 0;
  let z = 1;
  for (let i = 1; i <= n; i++) {
    z = z * 2;
    console.log(z);
    s += z;
    console.log(s);
  }
  console.log(s);
};
//taskFour();

//Task - 16

const taskFive = function () {
  let n = +prompt("Enter a A number", "");
  let s = 0;
  let y = 0;

  for (let i = 1; i < n; i++) {
    y = y + Math.sin(i);
    s = s + i / y;
  }
  console.log(s);
};
//taskFive()

//Task - 21

const taskSix = function () {
  let x = +prompt("Enter a A number", "");
  let e = +prompt("Enter a E number", "");
  let s = 0;
  let n = 1;
  let u = x;
  while (u > e) {
    u = ((u * x ** 2) / (2 * n)) * (2 * n + 1);
    s = s + u;
    n = n + 1;
  }
};
//taskSix();
