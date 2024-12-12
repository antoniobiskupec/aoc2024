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

  // Part One
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

  // Part Two

  function calculateSimilarityScore(leftList, rightList) {
    const rightCount = {};
    for (const item of rightList) {
      rightCount[item] = (rightCount[item] || 0) + 1;
    }

    let similarityScore = 0;
    for (const number of leftList) {
      similarityScore += number * (rightCount[number] || 0);
    }

    return similarityScore;
  }

  // Calculate the score
  const score = calculateSimilarityScore(leftList, rightList);

  console.log("Total Similarity Score:", score);
});
