import fs from "fs";

function partOne(file) {
  let fileContent = fs
    .readFileSync("./input_day1.txt", "UTF-8")
    .trim()
    .split("\n");
  const values = fileContent.map((content) => {
    let value = "";
    let first = content.split("").find((v) => !Number.isNaN(Number(v)));
    let last = content.split("").findLast((v) => !Number.isNaN(Number(v)));
    return Number(first + last);
  });
  return values.reduce((s, v) => s + v);
}

console.log(partOne("./input_day1.txt"));
