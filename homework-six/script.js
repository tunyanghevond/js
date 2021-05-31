//page  85 xndir 29 30 page 92 [2-5] neraryal

// PAGE 85 TASK 29

const factorial = function (n) {
  if (n == 0 || n == 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
};

// PAGE 92 TASK 2

const taskOne = function (n, m) {
  s = 0;
  for (let i = n; i <= m; i++) {
    s = s + i ** i;
  }
  console.log(s);
};
taskOne(+prompt("Enter an n", ""), +prompt("Enter an m", ""));

// PAGE 92 TASK 3

const taskThree = function (n) {
  let sum = 0;
  let product = 1;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      product = product * (i + 1) * (i + j ** 2);
    }
    sum = sum + product;
  }
};
//taskThree(+prompt('Enter a number', ''))

// PAGE 92 TASK 4

const tskFour = function (n, x) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum = sum + (i ** i * x ** i) / factorial(i);
  }
  console.log(sum);
};

//tskFour()

// TASK 5 PAGE 92

const taskFive = function (n) {
  let sum = 0;
  let pro = 1;
  let fuc = 1 / factorial(n);

  for (let k = 0; k <= n; k++) {
    pro = factorial(2 * k ** 2 + 1);
    sum = fuc + (-1) ** k * pro;
  }
  console.log(sum);
};
//taskFive(+prompt('Enter a number', ''))
