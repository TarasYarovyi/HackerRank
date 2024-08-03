// Sherlock and the Valid String
// https://www.hackerrank.com/challenges/sherlock-and-valid-string/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=strings

function isValid(s) {
  const obj = {};
  for (let i = 0; i < s.length; i++) {
    let symbol = s[i];
    obj[symbol] ? obj[symbol]++ : (obj[symbol] = 1);
  }
  const values = Object.values(obj);
  const max = Math.max(...values);
  const min = Math.min(...values);

  return (
    max - min <= 1 ||
    values.filter(el === min).length - values.filter(el === min).length <= 1
  );
}

console.log(isValid("abcddefghhgfedecba"));
