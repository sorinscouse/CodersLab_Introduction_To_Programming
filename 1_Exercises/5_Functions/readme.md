<img alt="Logo" src="http://coderslab.pl/svg/logo-coderslab.svg" width="400">

#  Functions

> Remember to separate exercises with comments, and write legible, well-formatted code.

## Exercises done with the lecturer

### FooBar ...FOOBAR  (~ 7min - 12min)

Write a function named ```FooBar``` that takes one variable. The function should display consecutive numbers, but:
* instead of numbers that divide by 3 it should write ```Foo```,
* instead of numbers that divide by 5 it should write ```Bar```,
* instead of numbers that divide by 3 and 5 it should write ```FOOBAR```.

For example, for ```x = 15``` the result will be:

```  
12Foo4BarFoo78FooBar11Foo1314FOOBAR
 ```

Do the exercise in `app.js`.

### Calculating power (~ 7min - 12min)
Write a function that takes two numbers: **a** and **n** as parameters. The function should **return** the result of raising **a** to the power of **n**.
Use a loop, not the ```Math.pow()```. Do the exercise in `app.js`.

-------------------------------------------------------------------------------

## Exercises to do on your own

### Exercise 1 (~ 5min - 10min)
Write a mixing function named```mixing``` that will take a string as a parameter.
The function should **return** this string preceded by the word ```mixed``` using the keyword ```return```.
Now, write in the console what the function returned.

Example:
```
input -> "carrot"
output -> "mixed carrot"
```

### Exercise 2 (~ 5min - 10min)
Write a function that will take the **n** number as a parameter and display the message "Programming is cool!" on the page **n** times.

### Exercise 3 (~ 5min - 10min)
Write a function that will take three numbers as parameters and **return** the greatest of them (return, not write in the console). You can write the result in the console only when you have returned the function result.

### Exercise 4 (~ 10min - 15min)
Create a function that will **return** (using the keyword ```return```) the sum of three numbers from an array. The array should be passed to the function as a parameter.

Example:
```JavaScript
input -> [1,2,3]
output -> 6
```

### Exercise 5 (~ 5min - 10min)
Create an anonymous function and assign it to a variable. The function's task is to write "When writing code, I always use functions, and I do not create global variables" ten times.

### Exercise 6 (~ 15min - 20min)
Write a ```rentCost(days)``` function that will extract the number of days and take it as a parameter, and calculate the cost of renting a room according to the formula:
* renting for 1 day - room cost 200 dollars/day,
* renting for 2-3 days - room cost 180 dollars/day,
* renting for 4-8 days - room cost 160 dollars/day,
* renting for 8 or more days - room cost 150 dollars/day.

Additionally, for every full week, 50-dollar discount is given. To calculate full weeks, use the code below:

```JavaScript
var numbersOfWeeks = Math.floor(days / 7); //Math.floor is a method that rounds a number down.
```

Example:
```JavaScript
input -> 8
output -> 1150
```

### Exercise 7 (~ 15min - 20min)
Write a ```rockPaperScissors(player1, player2)``` function that will take two strings and return the information who won, based on these strings. Correct strings accepted in the function are: paper, rock, and scissors.

The function should return one of the four messages:
* "Player 1 won",
* "Player 2 won",
* "Draw",
* "Incorrect information".

Example:
```JavaScript
input -> "paper", "scissors"
output -> "Player 2 won"
```

### Exercise 8 (~ 15min - 20min)
Write a function named ```calculateTip(amount, raiting)``` that will take two parameters:
* amount to pay,
* verbal description of the service.
If the description is as defined below, the function should return the tip amount. If the description is unknown & ndash; the function should return the message "illegible description".

The description can be:
"Excellent service" => 25% tip,
"Good service" => 20% tip,
"Mediocre service" =>15% tip,
"Bad service" => 0% tip.

Example:
```JavaScript
input -> 100, "Excellent service"
output -> 25
```
