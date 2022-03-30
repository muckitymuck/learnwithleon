//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.

let nums = [1, 2, 3, 4]

alert( nums.reduce( (acc,c) => acc + c, 0) )

//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
function square(arr){
    let sqarr = []
    for (let k = 0; k < arr.length; k++){
        sqarr.push(arr[k] * arr[k])

    
    }

    return sqarr
}
console.log(square(nums))

let newArr = nums => nums.map( num => num**2 )

//Create a function that takes string
//Print the reverse of that string to the console
let unoReverse = str => console.log( str.split('').reverse().join('') );



unoReverse("Andy");


//Create a function that takes in a string
//Alert if the string is a palindrome or not
const palindromeCheck = str => alert( str === str.split('').reverse().join(''))

palindromeCheck("racecar")