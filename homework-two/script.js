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
