//page 73 xndir 4,8-13 neraryal.

//page 73  Task- 4;

const taskFour = function (n, x) {
  let s = 0;

  for (let i = 1; i <= n; i++) {
    s += Math.sin(i ** i) * x;
  }
  console.log(s);
};
// taskFour(3, 2);

//page 73  Task- 5;
const taskFive = function (n, x) {
  let sin = Math.sin(x);
  let s = 0;
  for (let i = 0; i <= n; i++) {
    s += Math.sin(i) * sin;
  }
  console.log(s);
};
//taskFive(3, 2);

//page 73  Task- 8;
const taskEight = function (x, n) {
  let y;
  for (let i = 1; i <= n; i++) {
    y = (Math.cos(i * x) / 2 ** i) * i * (i - 1);
  }
  console.log(y);
};
//taskEight(2, 3);

//page 73  Task- 9;
function taskNine(n) {
  let result = 1;
  for (let i = n; i >= 1; i = i - 2) {
    result *= i;
  }
  console.log(result);
}
//taskNine(10)

//page 73  Task- 10;
function taskTen(a) {
  let y;
  for (let i = 1; i < a; i++) {
    y = 4 ** i;
  }
  console.log(y);
}
//taskTen(10);

//page 73  Task- 11;
const count = function (n) {
  let sum = 2;
  for (let i = 1; i <= n; i = i + 1) {
    let y = i * (i + 1) * (i + 2);
    sum += y;
  }
  console.log(sum);
};
//count(5)

//page 73  Task- 13;
const reverse = function (n) {
  let x = n;
  let reverse = 0;
  while (x) {
    let y = x % 10;
    reverse = reverse * 10 + y;
    x = Math.trunc(x / 10);
  }
  console.log(reverse);
};
