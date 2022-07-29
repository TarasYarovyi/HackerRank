
# Sales by Match

[link to chalange](https://www.hackerrank.com/challenges/sock-merchant/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup)

There is a large pile of socks that must be paired by color. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.

## Example

    n = 7
    ar = [1,2,1,2,1,3,2]

There is one pair of color **1** and one of color **2**. There are three odd socks left, one of each color. The number of pairs is **2**.

## Function Description

Complete the sockMerchant function in the editor below.

sockMerchant has the following parameter(s):
- int n: the number of socks in the pile
- int ar[n]: the colors of each sock  

## Returns

int: the number of pairs
  
## Input Format

The first line contains an integer *n* , the number of socks represented in `ar` .

The second line contains  space-separated integers, , the colors of the socks in the pile.


## Constraints
  - 1 <= *n* <= 100;
  - 1 <= ar[*i*] <= 100 where 0 <= *i* <= *n*
  

## Sample Input
```
STDIN                       Function
-----                       --------
9                           n = 9
10 20 20 10 10 30 50 10 20  ar = [10, 20, 20, 10, 10, 30, 50, 10, 20]
```

## Sample Output

3

## Explanation

![o](./assets/socks.png "Socks")

There are three pairs of socks.



## Solution
The general idea is to group array by its values. In javascript there are no `groupBy` function for array, but there are [reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce) function. We can use it to create array with count for each value. Then sum whole part of division by 2 without fractional part.

```java script
function sockMerchant(n, ar) {
    // Write your code here
// Define empty array for counts of values.
    const counts = [];

    // Using the 'reduce' function to update 'counts'.
    ar.reduce((counts, value) => {
        // This verification needed to set initial value of 0 to count. 
        // Otherwise we will have to sum undefined with a number, the result of such operation will be NaN - not a number.
        if(counts[value] === undefined) {
            counts[value] = 0;
        }
        // Increasing count of particular value on 1.
        counts[value] = counts[value] + 1;
        // Returning array of 'counts' as execution of 'reduce' function.
        return counts;
    }, counts);
 
    // Using the 'reduce' to summarize all counts divided by 2 without fractional part.
    return counts.reduce((partialSum, value) => partialSum + Math.trunc(value / 2), 0);
}
```