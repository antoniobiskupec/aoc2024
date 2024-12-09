const fs = require("fs");

fs.readFile("input_day1.txt", "utf-8", (err, data) => {
  const arr = data
    .split("\n")
    .filter((row) => row.trim() !== "")
    .map((row) => row.split(/\s+/));

  console.log(arr);

  const leftList = arr
    .map((pair) => pair[0])
    .sort((a, b) => Number(a) - Number(b));
  const rightList = arr
    .map((pair) => pair[1])
    .sort((a, b) => Number(a) - Number(b));

  console.log(leftList);
  console.log(rightList);

  const absoluteDifference = leftList.map((left, index) => {
    const right = rightList[index];
    return Math.abs(Number(left) - Number(right));
  });
  console.log(absoluteDifference);

  const sumOfAbsoluteDifferences = absoluteDifference.reduce(
    (sum, diff) => sum + diff,
    0
  );

  console.log(sumOfAbsoluteDifferences);
});
