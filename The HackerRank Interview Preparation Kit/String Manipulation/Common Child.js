// Common Child
// https://www.hackerrank.com/challenges/common-child/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=strings

function commonChild(s1, s2) {
  // Write your code here
  function removeUniq(str1, str2) {
    for (let i = 0; i < str1.length; i++) {
      const regexp = new RegExp(str1.charAt(i), "g");
      if (!regexp.test(str2)) {
        str1 = str1.replaceAll(regexp, "");
      }
    }

    return str1;
  }
  s1 = removeUniq(s1, s2);
  s2 = removeUniq(s2, s1);

  for (let i = 0; i < s1.length; i++) {
    let count = 0;
    for (let j = 0; j < s2.length; j++) {
      while (s1.charAt(i) === s2.charAt(j)) {
        count++;
        i++;
        j++;
        console.log(s1.charAt(i), s2.charAt(j));
      }
      console.log(count);
    }
  }

  console.log(s1, s2);
}

console.log(commonChild("SHINCHAN", "NOHARAAA"));
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
