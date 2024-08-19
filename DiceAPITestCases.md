# Dice tes cases

## test cases for the constructor

1. Create a dice with no upper bound given initializes a dice with minimumValue 1 and maximumValue 6
-   maximumValue 6
-   minimumValue 1
-   dots 0

2. Create a dice with upperbounds 2 - 20
expect:
-   maximumValue upper bound
-   minimumValue 1
-   dots 0

3. Test the exceptions
    Create a dice with upper bound:
    -   'a' throws `'upper bound must be an integer'`
    -   2.5 throws `'upper bound must be an integer'`
    -   null throws `'upper bound must be an integer'`
    -   true throws `'upper bound must be an integer'`
    -   false throws `'upper bound must be an integer'`
    -   0 throws `'upper bound too small'`
    -   1 throws `'upper bound too small'`
    -   -1 throws `'upper bound too small'`
    -   21 throws `'upper bound too big'`

## test cases for roll

1. Create a dice with no upper bound given
roll the dice
expect:
dots to be <= 6
and dots >= 1

(This should be repeated multiple times. To be checked later)

2. Create a dice with upper bound 2...20
roll the dice
expect:
dots to be <= upper bound
dots >= 1

## Test cases for the toString
testing not rolled and rolled
In both cases create a new dice (no upper bound given)
1. roll the dice
expect to return dot count as text. Compare it with dots casted as string

2. not rolled
expect return `'not rolled yet'`