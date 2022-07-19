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