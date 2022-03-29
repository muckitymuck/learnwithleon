//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.

// let nums = [23, 45, 87, 43]

// let sum = nums.reduce( (acc, c) => acc + c, 0 )

// alert(sum)


//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared

// let numss = [23, 45, 87, 43]

// let numSquared = numss.map( n => n * n )

// function squareNums(){
//     return nums.map( n => n * n )
// }

// console.log( numSquared)


//Create a function that takes string
//Print the reverse of that string to the console

// function reverseString(str){
//     let reverseString = str.split('').reverse().join('')
//     console.log(reverseString)
// }
// reverseString("cat")

//Create a function that takes in a string
//Alert if the string is a palindrome or not


const isPalindrome = s => s === s.split('').reverse().join('') ? alert('yes') : alert('No')