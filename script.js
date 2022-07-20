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