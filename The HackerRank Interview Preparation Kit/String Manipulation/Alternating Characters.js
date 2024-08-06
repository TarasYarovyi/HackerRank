// Alternating Characters
// https://www.hackerrank.com/challenges/alternating-characters/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=strings

function alternatingCharacters(s) {
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i + 1] === s[i]) {
      result++;
    }
  }
  return result;
}

console.log(alternatingCharacters("aaabbb"));
