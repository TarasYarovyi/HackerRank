// Luck Balance
// https://www.hackerrank.com/challenges/luck-balance/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=greedy-algorithms

function luckBalance(k, contests) {
  let important = 0;
  const ranking = contests.sort((a, b) => {
    if (a[1] === 1) {
      important++;
    }
    if (a[1] === b[1]) {
      return a[0] - b[0];
    }
  });
  console.log(important);
  return ranking.slice(k).reduce((acc, curr) => (acc += curr[0]), 0);
}

console.log(
  luckBalance(3, [
    [5, 1],
    [2, 1],
    [1, 1],
    [8, 1],
    [10, 0],
    [5, 0],
  ])
);
