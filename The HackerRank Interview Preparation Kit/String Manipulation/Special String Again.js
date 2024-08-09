// Special String Again
// https://www.hackerrank.com/challenges/special-palindrome-again/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=strings

function substrCount(s) {
  let result = s.length;
  const regex = /(.?).\1/;
  for (let i = 0; i < s.length; i++) {
    // const exec = regex.exec(s);
    // result.push(exec);
    // regex.lastIndex = i;
    const arr = s.substring(i).match(regex) || [];
    if (arr.index === 0) {
      result++;
    }
    console.log(arr.index);
  }
  return result;
}
console.log(substrCount("aaaa"));
