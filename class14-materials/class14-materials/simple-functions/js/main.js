//create a function that adds two numbers and alerts the sum
function addup(a, b) {
    let summ = a + b
    alert(summ)
}
addup(4, 5)

////////////////////
let addup = (a, b) => a + b

alert( addup(4, 5) )


//create a function that multiplys three numbers and console logs the product
function multi(d, e, f){
    let mult = d * e * f
    console.log(mult)
}

multi(2, 4, 6)
////////////////////////////
let multi = (d, e, f) => d * e * f

console.log( multi(2 * 3 * 4) )


//create a function that divides two numbers and returns the ???

function divi(g, h){
    let quotient = g / h

    return quotient;
}

divi(10, 5)

//////////////////////////////

let divi = (g, h) => g / h

divi(10 / 5)