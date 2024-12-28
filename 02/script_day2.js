const fs = require("fs");
const checkIfSafe = (row) => {
  const isIncreasing = row[1] > row[0];
  const isDecreasing = row[1] < row[0];

  for (let i = 1; i < row.length; i++) {
    const diff = row[i] - row[i - 1];

    // Check if difference is at least 1 or 3 at most
    if (Math.abs(diff) < 1 || Math.abs(diff) > 3) return false;

    if (isIncreasing && diff <= 0) return false;
    if (isDecreasing && diff >= 0) return false;
  }

  return true;
};

fs.readFile("./input_day2.txt", "utf-8", (err, data) => {
  const arr = data.split("\n").map((row) => row.split(" ").map(Number));
  console.log(arr);

  let safe = 0;
  arr.forEach((row) => {
    if (checkIfSafe(row)) safe++;
  });
  console.log(safe);
});
