# Dice API

This is Dice class for dice games. Dice holds the number of dots. The number of dots is between 1 and given upper bound (included). Maximum upper bound is 20. The minimum upper bound is 2.

If the dice hasn't been rolled, the number of dots is 0. After the dice has been rolled, the dot count can't become 0 again

## Operations

### **constructor(upperBound)**

- initialize the dice with upper bound that is passed as a parameter
- if no upper bound is given, the default upper bound will be 6
- initializes the dot count to 0

- if the upperBound is not a number and not an integer, throw an exception
`'upper bound must be an integer'`

- if the upper bound is not between 2 and 20, an exception is thrown
    - upper bound > 20: `'upper bound too big'`
    - upper bound < 2: `'upper bound too small'`

## Methods

### **roll**

-   rolls the dice
-   when rolled, the dot count will become a random number between 1 and upper bound
-   returns nothing

### **toString**
-   returns dot count as a text. For example: `'4'`
-   if the dice hasn't been rolled yet, returns the text `'not rolled yet'`

## Getters

### **dots**
-   returns the number if dots (dot count)

### **minimumValue**
-   returns the minimum number of dots. It should be 1.

### **maximumValue**
-   returns the upper bound of the dice.