// *Variables*
// Declare a variable, assign it a boolean, and alert the value
var yesno = true;

alert(yesno)

// Declare a variable, reassign it to your favorite color, and console log the value
const favcolor = 'red'
console.log('favcolor')

// *Functions*
// Create a function that takes in 4 numbers and returns the sum of the first 3 numbers divided by the fourth. Return the result. Call the function.
function nums(a, b, c, d) {
    let outt = (a + b + c) / d
    return outt
}
nums(2,3,4,5)

// Create a function that takes in 2 numbers. Console log the first number to the power of the second. Call the function.
function power(t,u){
    let oot = t ^ u
    console.log(oot)
}
power(2,10)
// *Conditionals*
// Create a function that takes in a boolean and a string. If the boolean is true, alert the string. If the boolean is false, console log the string
function upOrDown(g, h){
    if (g === true){
        alert(h);
    }else {
        console.log(h)
    }
}
upOrDown(true, "AYO")


//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number, but if the number is divisible by 3 log "fizz" instead of that number, if the number is divisible by 5 log "buzz" instead of the number, and if the number is divisible by 3 and 5 log "fizzbuzz" instead of that number
function fizzbuzz(n){
    for (let i = 1; i <= n ; i++){
        if (i % 3 === 0 || i % 5 ===0 ){
            if (i % 3 === 0 && i % 5 ===0){
                console.log("fizzbuzz")
            } if (i % 3 === 0 ){
                console.log('fizz')
            } if (i % 5 === 0 ){
                console.log('buzz')
            }
        }else {
            console.log(i)
        }
    }
}

function fizzbuzzTwo(m){
    for (let i = 1; i <= m + 1; i++){
        let out = ""
        if (i % 3 === 0) out += "fizz";
        if (i % 5 === 0) out += "buzz";

        console.log(out || i)
    }
}