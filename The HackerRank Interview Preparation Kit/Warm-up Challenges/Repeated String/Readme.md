# Repeated String
[link to chalange](https://www.hackerrank.com/challenges/repeated-string?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup)

## Example
    s = '*abcac*'
    n = 10

The substring we consider is *abcacabcac* , the first **10** characters of the infinite string. There are **4** occurrences of a in the substring.


## Returns 
* int: the frequency of a in the substring

## Input Format
The first line contains a single string, *s*.

The second line contains an integer, *n*.

## Constraints
* $1\leq |s|\leq 100$
* $1\leq n\leq 10^{12}$
* For 25% of the test cases, $n\leq 10^{6}$.
  
## Sample Input 0
    aba
    10
## Sample Output 0
    7

## Explanation 0
The first ***n*=10** letters of the infinite string are **7**. Because there are  **7** *a*'s, we return **7**.

## Sample Input 1

    a
    1000000000000

## Sample Output 1
    1000000000000

## Explanation 1

Because all of the first *n* = 1000000000000 letters of the infinite string are *a*, we return 1000000000000.

## Solution

[UML](./Assets/Repeated%20String%202.pdf)

``` java script
//Count the quantiy of complete strings in n
const fullStringQty = Math.trunc(n / s.length);

//Count how many "a" are in the first initial string
let inFirstString = 0;
    if (s.match(/[a]/g) !== null) 
        inFirstString = s.match(/[a]/g).length;

//Create an ending string
let lastString = s.substring(0 , n % fullStringQty);
    if (fullStringQty === 0 ) 
        lastString = s.substring(0 , n);

//Count how many "a" are in the ending string       
let inLastString = 0; 
    if (lastString.match(/[a]/g) !== null && lastString.length > 0 ) 
        inLastString =  lastString.match(/[a]/g).length;

//Count quantity of "a" in s  
const answer = inFirstString * fullStringQty + inLastString;
return answer;

```

