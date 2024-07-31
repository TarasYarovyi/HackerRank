// Sherlock and the Valid String
// https://www.hackerrank.com/challenges/sherlock-and-valid-string/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=strings

function isValid(s) {
  const obj = {};
  for (let i = 0; i < s.length; i++) {
    let symbol = s[i];
    obj[symbol] ? obj[symbol]++ : (obj[symbol] = 1);
  }

  return obj;
}

console.log(isValid("abcdefghhgfedecba"));
