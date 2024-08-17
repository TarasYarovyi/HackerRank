// Common Child
// https://www.hackerrank.com/challenges/common-child/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=strings

function commonChild(s1, s2) {
  // Write your code here
  const matrix = [];
  for (let i = 0; i < s2.length + 1; i++) {
    matrix.push(new Array(s1.length + 1).fill(0));
  }
  for (let i = 1; i < s1.length + 1; i++) {
    for (let j = 1; j < s2.length + 1; j++) {
      if (s1[i - 1] === s2[j - 1]) {
        matrix[i][j] = matrix[i - 1][j - 1] + 1;
      } else {
        matrix[i][j] = Math.max(matrix[i - 1][j], matrix[i][j - 1]);
      }
    }
  }

  return matrix;
}

console.log(commonChild("abdef", "acdf"));
("H N H A N");
("N H A A A A");

("HARRY");
("SALLY");
("A Y");
("A Y");

("ABCDEF");
("FBDAMN");

("A B D F");
("F B D A ");
