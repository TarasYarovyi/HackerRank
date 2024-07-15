// Luck Balance
// https://www.hackerrank.com/challenges/luck-balance/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=greedy-algorithms

function luckBalance(k, contests) {
  const ranking = contests.sort((a, b) => {
    if (a[1] === b[1]) {
      return a[0] - b[0];
    } else {
      return b[1] - a[1];
    }
  });
  let toWin = ranking.filter((el) => el[1] > 0).length - k;
  console.log(ranking);
  return ranking.reduce(
    (acc, curr, index) => (index < toWin ? acc - curr[0] : acc + curr[0]),
    0
  );
}

console.log(
  luckBalance(2, [
    [5, 1],
    [4, 0],
    [6, 1],
    [2, 1],
    [8, 0],
  ])
);
