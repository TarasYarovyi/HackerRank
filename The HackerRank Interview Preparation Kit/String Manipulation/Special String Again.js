// Special String Again
// https://www.hackerrank.com/challenges/special-palindrome-again/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=strings

function substrCount(s) {
  let result = [];
  const regex = /(.+).\1/g;
  for (let i = 0; i < s.length; i++) {
    result.push(regex.exec(s));
    i = regex.lastIndex + 1;
    regex.lastIndex--;
  }
  return result;
}

console.log(substrCount("abcbaba"));
