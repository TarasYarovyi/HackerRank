// Special String Again
// https://www.hackerrank.com/challenges/special-palindrome-again/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=strings

function substrCount(s) {
  let result = s.length;

  for (let i = 0; i < s.length; i++) {
    let repeat = 0;
    while (i + 1 < s.length && s.charAt(i) === s.charAt(i + 1)) {
      repeat++;
      i++;
    }
    result += (repeat * (repeat + 1)) / 2;

    const arr = s.substring(i).match(/(.+).\1/) || [];
    if (arr.index === 0) result++;
  }
  return result;
}
console.log(substrCount("aaaa"));
