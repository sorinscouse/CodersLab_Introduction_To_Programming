<img alt="Logo" src="http://coderslab.pl/svg/logo-coderslab.svg" width="400">

# Introduction to programming - Snippets
> Short pieces of code that solve various problems, illustrate dependencies, or show how to use some more complicated functions.

#### 1. How to draw a number from a given range, e.g. 1 to 10?

```JavaScript
var min = 1;
var max = 10;
var number = Math.random() * (max - min) + min;
console.log(number);
```

#### 2. How to add elements to an array?
You can use push() function - if you want to add elements at the end.

E.g. We want to add only the numbers divisible by 3 to the array, so the size of the array will be smaller than
10

```JavaScript
var arr = []; // creating a new empty array
var n = 10; // checking 10 numbers
for(var i = 0; i < n; i++) {
    if( i % 3 === 0) {  // if a number divides by 3 with no remainder left
        arr.push(i); // add it after the last element of the array
    }
}
console.log(arr) // [0, 3, 6, 9]
```

#### 3. What is the difference between printing out and returning a value by a function?

```JavaScript
//This function does not have the keyword return, it only displays the name
function getName(surname) {
    if( surname === "Smith") {
        console.log("John");
    }    
}
var name = getName("Smith");
console.log(name) // "undefined" <- the console will display "undefined" because we do not return anything


//This function has the keyword return
function getAge(person) {
    if( person === "John Smith") {
        return 99;
    }    
}
var age = getAge("John Smith");
console.log(age) // 99 <- the console will display what we asked for and we can use this variable further in the code
```
