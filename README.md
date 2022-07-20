# HackerRank's 10 Days of Javascript

# Day 0

## console.logging a variable stored in a parameter

``` javascript

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function greeting(parameterVariable) {

    console.log('Hello, World!');
    console.log(parameterVariable);
    
}

```


## Explicit type coercion and string concatenation

``` javascript
function performOperation(secondInteger, secondDecimal, secondString) {
    // Declare a variable named 'firstInteger' and initialize with integer value 4.
    const firstInteger = 4;
    
    // Declare a variable named 'firstDecimal' and initialize with floating-point value 4.0.
    const firstDecimal = 4.0;
    
    // Declare a variable named 'firstString' and initialize with the string "HackerRank".
    const firstString = 'HackerRank ';
    
    // Write code that uses console.log to print the sum of the 'firstInteger' and 'secondInteger' (converted to a Number        type) on a new line.
    
    console.log(firstInteger + Number(secondInteger))
    
    // Write code that uses console.log to print the sum of 'firstDecimal' and 'secondDecimal' (converted to a Number            type) on a new line.
    
    console.log(firstDecimal + Number(secondDecimal))
    
    // Write code that uses console.log to print the concatenation of 'firstString' and 'secondString' on a new line. The        variable 'firstString' must be printed first.
    
    console.log(firstString + secondString)
    
}
```


# Day 1

## Simple Arithmetic

```javascript
function getArea(length, width) {
    let area;
    // Write your code here
    area = length * width
    return area;
}

function getPerimeter(length, width) {
    let perimeter;
    // Write your code here
    perimeter = 2 * (length + width)
    
    return perimeter;
}
```

## Creating a function that returns the factorial of an integer

``` javascript

const factorial = (n) => {
    let factorial = n
    
    while (n > 1) {
        n--
        factorial *= n
    }
    
    return factorial
}

```

## Using Math.PI

``` javascript
function main() {
    const PI = Math.PI
    const radius = readLine()
    console.log(PI * (radius ** 2))
    console.log(PI * 2 * radius)
}
```

# Day 2

## if - else

``` javascript
function getGrade(score) {
    let grade;
    // Write your code here
    if (0 <= score && score <= 5 ) {
        grade = "F"
    } else if (5 < score && score <= 10 ) {
        grade = "E"
    } else if (10 < score && score <= 15 ) {
        grade = "D"        
    } else if (15 < score && score <= 20 ) {
        grade = "C"        
    } else if (20 < score && score <= 25 ) {
        grade = "B"        
    } else if (25 < score && score <= 30 ) {
        grade = "A"
    }        
    
    
    return grade;
}
```

## Switch statement

``` javascript
function getLetter(s) {
    let letter;
    // Write your code here
    switch (s[0]) {
        case "a":
        case "e":
        case "i":
        case "o":
        case "u":
            letter = "A"
        break
        case "b":
        case "c":
        case "d":
        case "f":
        case "g":
            letter = "B"
        break
        case "h":
        case "j":
        case "k":
        case "l":
        case "m":
            letter = "C"
        break
        default:
            letter = "D"
        break
    }
    return letter;
}

```

## Loop
'
``` javascript
function vowelsAndConsonants(s) {
    const vowels = ["a", "e", "i", "o", "u"]
    for (let i in s) {
        if (vowels.includes(s[i])) {
            console.log(s[i])
        }
    }
        
    for (let i in s) {
        if (vowels.includes(s[i]) === false) {
            console.log(s[i])
        }
    }
}

```

# Day 3

## Find the second largest number

``` javascript
// This function finds the second largest number in a given array

function getSecondLargest(nums) {
    // initializing two variables to track the largest and second largest number at a given iteration of the loop through the array
    let secondlargest = 0
    let largest = 0
        // loop goes through the array of numbers
        for (let num of nums) {
            if (num > largest) {
                // the previous largest number will be assigned to second largest
                secondlargest = largest
                // if the current number in the array is larger than `largest`, it is the biggest number so far so it will be assigned to `largest`
                largest = num
                // otherwise, if the number is NOT bigger than the current largest, it will be assigned to `secondlargest` as long as it isn't equal to the current largest.
            } else if (num > secondlargest && num != largest) {
                secondlargest = num
            }
        }
        // after iterating through the whole array, the second largest number will be outputted and returned.
    console.log(secondlargest)
    return secondlargest
}

getSecondLargest([700, 2, 3, 6, 1000, 500]) // returns `700`
```





