// *Variables*
// Create a variable and console log the value
let nda = 4
console.log(nda)



// Create a variable, add 10 to it, and alert the value

let bbb = 6
bbb += 10

console.log(bbb)


// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function minusFour( a, b, c, d){
    alert( a - b - c - d )
}
 minusFour( 10, 2, 2, 2)


// Create a function that divides one number by another and returns the remainder

function diviTwo( a, b ){
    return console.log(a % b)
}

diviTwo( 50, 25)


// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji

function condi( n, m ){
    if (n + m > 50){
        alert("Jumanji")
    }
}
condi(30, 79)

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function threeProd( p, o , u) {
    if ((p * o * u) % 3 === 0){
        alert("Zebra")
    }
}
threeProd(3, 3, 3)

//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in
function loopy( q, w ){
    for( let i = 0; i < w; i ++) {
        console.log(q)
    }
}
loopy("me ", 6)