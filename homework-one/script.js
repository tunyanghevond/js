//Xndir 1 , Xndir 2, Xndir 3, Xndir 5, Xndir 6
//page 35 1-5 xndirner,
// Task - 1
const separate = function () {
  let num = +prompt("Enter number", "");
  if (num % 1 === 0) {
    let a = num;
    alert(a);
  } else {
    let integr = Math.floor(num);
    let b = num - integr;
    alert(b.toFixed(1));
  }
};
//separate();

// Task -2

const ascribe = function () {
  let x = +prompt("Enter number", "");
  let y = x;
  if (y >= 0) {
    alert(y);
  } else {
    y = -x;
    alert(y);
  }
};
//ascribe();

// Task -3

const checkValue = function () {
  let num = +prompt("Enter number", "");
  if (num >= 0 && num < 5) {
    let y = 2 * num ** 2 + 3 * num - 1;
    console.log(y);
  } else {
    y = num + 1;
    console.log(y);
  }
};
//checkValue();

// Task -4

const triangle = function () {
  let a, b, c;
  do {
    a = a || +prompt("Enter  a A number", "");
    b = b || +prompt("Enter  a B number", "");
    c = c || +prompt("Enter  a C number", "");
    if (a < 0) {
      a = 0;
    }
    if (b < 0) {
      b = 0;
    }
    if (c < 0) {
      c = 0;
    }
    if (
      a ** 2 < b ** 2 + c ** 2 &&
      b ** 2 < a ** 2 + c ** 2 &&
      c ** 2 < a ** 2 + b ** 2
    ) {
      console.log("The triangle is sharp corner ");
    } else {
      console.log("It is not sharp corner triangel");
    }
  } while (!a || !b || !c);
};
//triangle();

// Task -5

const checkMaxValue = function () {
  let a = +prompt("Enter  a A number", "");
  let b = +prompt("Enter  a B number", "");
  let c = +prompt("Enter  a C number", "");
  let max = a;
  if (b > max && b > c) {
    max = b;
  } else if (c > max) {
    max = c;
  }
  console.log(max);
};
//checkMaxValue();

// Task - 6

const taskSix = function () {
  let y;
  let x = +prompt("Enter a number", "");
  if (x > -10 && x <= -6) {
    y = x + 1;
  } else if (x > 0 && x <= 3) {
    y = x ** 2;
  } else {
    y = x;
  }
  console.log(y);
};
//taskSix();

// Task - 7

const taskSeven = function () {
  let a = +prompt("Enter a A number", "");
  let b = +prompt("Enter a B number", "");
  let x = +prompt("Enter a C number", "");
  let y;
  if (a + b > 10) {
    y = a * x + b;
  } else if (a + b >= -15 && a + b < 6) {
    y = b * x - a;
  } else {
    y = a + b;
  }
  console.log(y);
};
//taskSeven();

// Task - 8

const taskEight = function () {
  let a = +prompt("Enter a A number", "");
  let x = +prompt("Enter a X number", "");
  let y;

  if (x > 0 && x <= 4) {
    y = x + 3 * a;
  } else if (x > 5 && x <= 8) {
    y = a * x - 2;
  } else if (x > 20) {
    y = x ** 2;
  } else {
    y = 3 * x;
  }
  console.log(y);
};
//taskEight();

// Task - 9

const retreatYear = function () {
  let year = +prompt("Enter a year", "");
  if (year % 4 === 0 && year % 400 !== 0) {
    console.log("The year is retreat");
  } else {
    console.log("The year is not retreat");
  }
};
//retreatYear();

// Task 10

const taskTen = function () {
  let x = +prompt("Enter a X number", "");
  let y = +prompt("Enter a Y number", "");
  if (x < y) {
    x = (x + y) / 2;
    y = (x * y) / 2;
  } else if (y < x) {
    y = (x + y) / 2;
    x = (x * y) / 2;
  }

  console.log("x:", x, "y:", y);
};
//taskTen();
