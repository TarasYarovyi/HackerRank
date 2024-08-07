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

  for (let i = 0; i < cost.length; i++) {
    hash[cost[i]] ? hash[cost[i]].push(i + 1) : (hash[cost[i]] = [i + 1]);
  }

  for (let i = 0; i < cost.length; i++) {
    const el = cost[i];
    if (hash[money - el]) {
      if (el === money - el) {
        if (hash[el].length > 1) {
          console.log(hash[el][0], hash[el][1]);
          return;
        }
      } else {
        console.log(hash[el][0], hash[money - el][0]);
        return;
      }
    }
  }
}

whatFlavors([1, 4, 5, 3, 2], 4);
