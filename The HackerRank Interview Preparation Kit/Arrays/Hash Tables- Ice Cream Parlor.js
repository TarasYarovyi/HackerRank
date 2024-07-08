// https://www.hackerrank.com/challenges/ctci-ice-cream-parlor/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=search

function whatFlavors(cost, money) {
  // Write your code here
  let first, second;
  cost.findIndex(
    (el1, index1) =>
      el1 +
      cost.find((el2, index2) => {
        if (el1 + el2 === money) {
          first = index1 + 1;
          second = index2 + 1;
          return true;
        } else false;
      })
  );
  console.log(first, second);
}

console.log(whatFlavors([4, 1, 5, 3, 2], 4));
