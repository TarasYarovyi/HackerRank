// Minimum Absolute Difference in an Array
// https://www.hackerrank.com/challenges/minimum-absolute-difference-in-an-array/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=greedy-algorithms

function minimumAbsoluteDifference(arr) {
  const sortedArr = arr.sort((a, b) => a - b);
  return sortedArr.reduce(
    (acc, curr, index) =>
      Math.abs(curr - sortedArr[index + 1]) < acc
        ? Math.abs(curr - sortedArr[index + 1])
        : acc,
    Infinity
  );
}

console.log(
  minimumAbsoluteDifference([-59, -36, -13, 1, -53, -92, -2, -96, -54, 75])
);
