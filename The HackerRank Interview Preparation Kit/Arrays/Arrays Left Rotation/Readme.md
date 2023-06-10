# Arrays Left Rotation
[link to chalange](https://www.hackerrank.com/challenges/ctci-array-left-rotation/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays)

A left rotation operation on an array shifts each of the array's elements 1 unit to the left. For example, if 2 left rotations are performed on array [1,2,3,4,5] , then the array would become [3,4,5,1,2] . Note that the lowest index item moves to the highest index in a rotation. This is called a circular array.

Given an array ***a*** of ***n*** integers and a number, ***d***, perform ***d*** left rotations on the array. Return the updated array to be printed as a single line of space-separated integers.


## Function Description

Complete the function rotLeft in the editor below.

rotLeft has the following parameter(s):

* int a[n]: the array to rotate
* int d: the number of rotations

Returns

* int a'[n]: the rotated array

## Input Format

The first line contains two space-separated integers ***n*** and ***d*** , the size of ***a***  and the number of left rotations.
The second line contains ***n*** space-separated integers, each an ***a***  [***i***] .


## Constraints
* $1\leq n\leq 10^{5}$
* $1\leq d\leq n$
* $1\leq a[i]\leq 10^{6}$

## Sample Input

    5 4
    1 2 3 4 5


## Sample Output

    5 1 2 3 4

## Explanation

When we perform d = 4 left rotations, the array undergoes the following sequence of changes:
[1,2,3,4,5] $\rightarrow$ [2,3,4,5,1] $\rightarrow$ [3,4,5,1,2] $\rightarrow$ [4,5,1,2,3] $\rightarrow$ [5,1,2,3,4]

## Solution
[UML](Assets/Arrays%20Left%20Rotation.jpg)

```javascript

function rotLeft(a, d) {
    /* we just need to take the first
     element and move it to the end of 
     the array
    */

for (let i = 0; i < d; i++){
        let shiftedElemnt = a.shift();
        a.push(shiftedElemnt);
    }

return a
}

```


