<img src="http://coderslab.pl/wp-content/uploads/2016/03/logo-v2.png" align="right" style="width:150px; margin-top:45px"/>

# Introduction to programming - Homework
> Write the code in appropriate files according to exercise descriptions.

**VERY IMPORTANT - Your homework is checked using an automated system. In order for the answers to be considered correct, the pages MUST display the same messages as in the exercise description, and function and method names MUST be exactly the same as given in the exercises.**

> Additional exercises (with a star * ) are for volunteers. You will find them at the end.


### Exercise 1
Write a ```getSecondMaxNumber(array)``` function that takes an array as a parameter. It should **return** the second largest number in the array.

Example:
```JavaScript
var arr1 = [2, 3, 1, 6, 100, 49, 5, 7, 8, 9 ];
console.log(getSecondMaxNumber(arr1));
```
Result in the console: 49 // The largest number in the array is 100, but we were looking for the second largest so the answer must be 49 in this case

### Exercise 2
Write a ```getNegativeNumbers(array)```function that takes an array as a parameter. The array may contain negative numbers. The function should **return** a new array containing only the negative numbers.
*Hint: Snippets -> 2. How to add elements to an array?*

Example:
```JavaScript
var arr1 = [4, -5, 0, 2, -67, 8, 10, -34 ];
console.log(getNegativeNumbers(arr1));
```
Result in the console: [-5, -67, -34]


### Exercise 3
Write a ```getEvenSum(n)```function that takes a number as a parameter. The function should return the sum of all even numbers ranging from ```i = 1``` to ```n```.
**The function should return a result**. The result may also be displayed in the console.


Example:
```JavaScript
var n = 5;
console.log(getEvenSum(n));
```
Result in the console:  6 // (because 2 + 4 = 6)

## Additional exercises

### Exercise 4 ( * )

Write a ```getFibonacciNumbers(n)``` function that takes a number ```n``` as a parameter.
The function should **return** an array filled with a Fibonacci sequence of **n** numbers.

*The Fibonacci sequence is a series of numbers, where each number is the sum of the two previous ones.
If n is 0 return 0. If n is equal to 1 return 1.
Otherwise, see the example below:*

Example:
```JavaScript
var n = 9;
console.log(getFibonacciNumbers(n));
```
Result in the console: [0, 1, 1, 2, 3, 5, 8, 13, 21]

### Exercise 5 ( * )
Write a ```isPrimeNumber(n)``` function that takes a number ```n``` as a parameter.
The function should **return** boolean value: true or false depending on whether ```n``` is a prime number or not.

*A prime number divides by one and by itself.*

*Use* **brute force**. It is the simplest and, at the same time, the most time-consuming method of determining prime numbers.
It checks all the potential divisors of a given number. If a given number is not divided by any other number (except one and itself), it is marked as a prime number.
In order to optimize the algorithm, we check all potential divisors that are no larger than the root of the number itself. Larger values cannot be divisors.

To obtain the remainder of division use the **%** (modulo) operator,* e.g.

```JavaScript
12 % 5 = 2
```

Example:
```JavaScript
var n = 9;
console.log(isPrimeNumber(n));
Result in the console: false //because 9 divides by 1, 3 i 9 without any remainder

var n = 11;
console.log(isPrimeNumber(n));
Result in the console: true //because 11 divides without any remainder only by 1 and 11
```


### Exercise 6 ( * )
Write a function named ```getPi(n)``` that takes a number of iterations (```n```) as a parameter.
The function should **return** the number **Pi**. Use the following formula:

```JavaScript
pi = 4 * ((1/1 - 1/3) + (1/5 - 1/7) + (1/9 - 1/11) + ...)
```
See how the precision of the result changes depending on the number of loop iterations.

Example:
```JavaScript
var n = 9;
console.log(getPi(n));
```
Result in the console: xxx

### Exercise 7 ( * )
Write a function named ```whatNumber(n)```that takes a number ```n``` as a parameter.
The function should **return** information if the ```n```is a perfect number, an incomplete number or neither of them.
If it is a perfect number return -> "perfect"
If it is an incomplete number return -> "incomplete"
Otherwise return -> false

*A perfect number is a number that is the sum of all its divisors (smaller than it), e.g. 6:*
```JavaScript
6 = 3 + 2 + 1
```

*An incomplete number is greater than the sum of all its divisors, e.g. 10:*

```JavaScript
1+2+5=8 < 10
```

Example:
```JavaScript
var n = 6;
console.log(whatNumber(n));
Result in the console: "perfect"

var n = 10;
console.log(whatNumber(n));
Result in the console: "incomplete"
```


### Exercise 8 ( * )
Write ```mySin(x, iterNum)``` and ```myCos(x, iterNum)``` functions that will **return** an approximation of ```sinus``` and ```cosinus``` functions. Use the following formulas:
```JavaScript
sin(x) = (x^1)/1! - (x^3)/3! + (x^5)/5! - (x^7)/7! + (x^9)/9! - (x^11)/11! + ...
cos(x) = (x^0)/0! - (x^2)/2! + (x^4)/4! - (x^6)/6! + (x^8)/8! - (x^10)/10! + ...
```
Remember that ```0! = 1```.
First write a function for calculating the force, then for calculating the power, and finally combine them together.
