// Common Child
// https://www.hackerrank.com/challenges/common-child/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=strings

function commonChild(s1, s2) {
  // Write your code here
  let result = "";
  for (let i = 0; i < s1.length; i++) {
    let j = 0;
    while (j < s2.length) {
      if (s1.charAt(i) === s2.charAt(j)) {
        result += s1.charAt(i);
        j = i;

        break;
      }
      j++;
    }
  }
  return result;
}

console.log(commonChild("SHINCHAN", "NOHARAAA"));
