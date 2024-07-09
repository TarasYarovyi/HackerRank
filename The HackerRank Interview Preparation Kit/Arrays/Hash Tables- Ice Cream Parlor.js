// https://www.hackerrank.com/challenges/ctci-ice-cream-parlor/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=search

// function whatFlavors(cost, money) {
//   // Write your code here
//   let first, second;
//   cost.findIndex(
//     (el1, index1) =>
//       el1 +
//       cost.find((el2, index2) => {
//         if (index1 !== index2 && el1 + el2 === money) {
//           first = index1 + 1;
//           second = index2 + 1;
//           return true;
//         } else false;
//       })
//   );
//   console.log(first, second);
// }

function whatFlavors(cost, money) {
  const hash = {};
  for (let i = cost.length - 1; i >= 0; i--) {
    hash[cost[i]] ? hash[cost[i]].push(i + 1) : (hash[cost[i]] = [i + 1]);
  }

  for (let i = cost.length - 1; i >= 0; i--) {
    const el = cost[i];
    if (hash[money - el]) {
    }
  }
}

whatFlavors([4, 1, 4, 3, 2], 4);
