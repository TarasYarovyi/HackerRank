# 2D Array - DS
[link to challage](https://www.hackerrank.com/challenges/2d-array/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays)

Given a  2D $6\times 6$ Array, ***arr*** :

    1 1 1 0 0 0
    0 1 0 0 0 0
    1 1 1 0 0 0
    0 0 0 0 0 0
    0 0 0 0 0 0
    0 0 0 0 0 0

An hourglass ***A*** in  is a subset of values with indices falling in this pattern in ***arr***'s graphical representation:

    a b c
      d
    e f g

There are ***16*** hourglasses in  ***arr***. An hourglass sum is the sum of an hourglass' values. Calculate the hourglass sum for every hourglass in ***arr***, then print the maximum hourglass sum. The array will always be $6\times 6$.  

## Example

***arr =***


    -9 -9 -9  1 1 1 
     0 -9  0  4 3 2
    -9 -9 -9  1 2 3
     0  0  8  6 6 0
     0  0  0 -2 0 0
     0  0  1  2 4 0

The ***16*** hourglass sums are:

    -63, -34, -9, 12, 
    -10,   0, 28, 23, 
    -27, -11, -2, 10, 
      9,  17, 25, 18
**Note:** If you have already solved the Java domain's Java 2D Array challenge, you may wish to skip this challenge.

## Function Description

Complete the function hourglassSum in the editor below.

hourglassSum has the following parameter(s):

* int arr[6][6]: an array of integers

## Returns

* int: the maximum hourglass sum
  
## Input Format

Each of the ***6*** lines of inputs ***arr*** **[i]** contains ***6*** space-separated integers ***arr*** **[i] [j]**.

## Constraints

* $-9 \leq  arr [i][j] \leq 9$
* $0 \leq  i,j \leq 5$

## Output Format

Print the largest (maximum) hourglass sum found in ***arr***.

## Sample Input

    1 1 1 0 0 0
    0 1 0 0 0 0
    1 1 1 0 0 0
    0 0 2 4 4 0
    0 0 0 2 0 0
    0 0 1 2 4 0

## Sample Output

    19
## Explanation

***arr*** contains the following hourglasses:

    1 1 1   1 1 0   1 0 0   0 0 0
      1       0       0       0
    1 1 1   1 1 0   1 0 0   0 0 0

    0 1 0   1 0 0   0 0 0   0 0 0
      1       1       0       0
    0 0 2   0 2 4   2 4 4   4 4 0

    1 1 1   1 1 0   1 0 0   0 0 0
      0       2       4       4
    0 0 0   0 0 2   0 2 0   2 0 0

    0 0 2   0 2 4   2 4 4   4 4 0
      0       0       2       0
    0 0 1   0 1 2   1 2 4   2 4 0

The hourglass with the maximum sum (***19***) is:

    2 4 4
      2
    1 2 4

    
## Solution

``` javascript
// Set the lowest possible value of hourglass
    let result = -81; 
// The center of the first hourglass will be at row 1 and kolumn 1 position.
// Summarize all the elements of the hourglass in relation to their position
// to the center and move the center further
    for (let r = 1; r <= 4; r++){
        for (let k = 1; k <= 4; k++){
            
                        let hourglass  = 
                              arr [r-1][k-1]
                            + arr [r-1][k]
                            + arr [r-1][k+1]
                            + arr [r][k]
                            + arr [r+1][k-1]
                            + arr [r+1][k]
                            + arr [r+1][k+1];
// change the result if  will be found a higher sum.
        if (hourglass > result) result = hourglass;                     
        }
    }
    
    return result;

```

    

