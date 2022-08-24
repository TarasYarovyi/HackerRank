# Minimum Swaps 2

[Link to challege](https://www.hackerrank.com/challenges/minimum-swaps-2/problem)


You are given an unordered array consisting of consecutive integers  $\in$ [1, 2, 3, ..., n] without any duplicates. You are allowed to swap any two elements. Find the minimum number of swaps required to sort the array in ascending order.

## Example

arr = $\left [ 7,1,3,2,4,5,6\right ]$

Perform the following steps:

        i   arr                     swap (indices)
        0   [7, 1, 3, 2, 4, 5, 6]   swap (0,3)
        1   [2, 1, 3, 7, 4, 5, 6]   swap (0,1)
        2   [1, 2, 3, 7, 4, 5, 6]   swap (3,4)
        3   [1, 2, 3, 4, 7, 5, 6]   swap (4,5)
        4   [1, 2, 3, 4, 5, 7, 6]   swap (5,6)
        5   [1, 2, 3, 4, 5, 6, 7]

It took 5 swaps to sort the array.

## Function Description

Complete the function minimumSwaps in the editor below.

minimumSwaps has the following parameter(s):

* int arr[n]: an unordered array of integers

## Returns

* int: the minimum number of swaps to sort the array

## Input Format

The first line contains an integer ***n***, , the size of ***arr***.
The second line contains n space-separated integers ***arr[i]*** .

## Constraints
* $1\leq n\leq 10^{5}$
* $1\leq arr[i]\leq n$

## Sample Input 0

    4
    4 3 1 2

## Sample Output 0
    3

## Explanation 0

Given array $arr: [4,3,1,2]$ <br/>
After swapping $(0,2)$ we get $arr: [ 1,3,4,2]$ <br/>
After swapping $(1,2)$ we get $arr: [ 1,4,3,2]$ <br/>
After swapping $(1,3)$ we get $arr: [ 1,2,3,4]$ <br/>
So, we need a minimum of $3$  swaps to sort the array in ascending order.

## Sample Input 1

    5
    2 3 4 1 5

## Sample Output 1
    3

## Explanation 1

Given array $arr:[2,3,4,1,5]$ <br/>
After swapping $(2,3)$ we get $arr: [2,3,1,4,5]$ <br/>
After swapping $(0,1)$ we get $arr: [3,2,1,4,5]$ <br/>
After swapping $(0,2)$ we get $arr: [1,2,3,4,5]$ <br/>
So, we need a minimum of $3$  swaps to sort the array in ascending order.


## Sample Input 2

    7
    1 3 5 2 4 6 7

## Sample Output 2
    3

## Explanation 2

Given array $arr:  [ 1,3,5,2,4,6,7 ]$ <br/>
After swapping $(1,3)$ we get $arr: [1,2,5,3,4,6,7]$ <br/>
After swapping $(2,3)$ we get $arr: [1,2,3,5,4,6,7]$ <br/>
After swapping $(3,4)$ we get $arr: [1,2,3,4,5,6,7]$ <br/>
So, we need a minimum of $3$  swaps to sort the array in ascending order.

## Solution
[UML](Assets/Minimum%20Swaps.jpg)

```javascript
function minimumSwaps(arr) {

/* you need to take the first element in the array, 
   the difference of which with its ordinal number will be negative
*/
let result = 0;
for (let i = 0; i < arr.length; i++) {
  // swap it to the right place until the difference will be >= 0 
  while (arr[i] - (i + 1) < 0) {
    let properIndex = arr[i] - 1;
    [arr[properIndex], arr[i]] = [arr[i], arr[properIndex]];
    result++;
  }
}
return result; 
}
```