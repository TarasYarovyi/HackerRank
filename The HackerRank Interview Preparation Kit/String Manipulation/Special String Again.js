// Special String Again
// https://www.hackerrank.com/challenges/special-palindrome-again/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=strings

function substrCount(s) {
  let result = [];
  for (let i = 0; i < s.length; i++) {
    result.push(s.substring(i).match(/(.+).\1/));
  }
  return result;
}

console.log(substrCount("abcbaba"));
