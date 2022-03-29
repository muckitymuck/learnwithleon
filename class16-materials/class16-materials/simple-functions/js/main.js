//---Easy
//create a function that subtracts two numbers and alerts the difference
function subb(t, y){
    let x = t - y;
    alert(x)
}

subb(40, 30)


//create a function that divides three numbers and console logs the quotient

function divi(u, i, o) {

    console.log(u / i / o)

}

divi(50, 2, 2)

//create a function that multiplys three numbers and returns the product

function multi(s, d, f) {

    return s * d * f
}



//---Medium
//create a function that takes in three numbers. Add the first two numbers and return the remainder of dividing the sum of the first two numbers by the third number

function mediu(b, c, d) {

    let a = (b + c) % d
    return a;
}

console.log(mediu(7, 5, 2))

//---Hard
//create a function that takes in 4 numbers. Multiply the first two numbers. If the product is greater than 100 add the sum of the last two numbers and console log the value. If the product is less that 100, subtract the difference of the last two numbers and console log the value. If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number


function fourFun(e, f, g, h) {
    let i = e * f;
    if (i < 100) {
        console.log(g + h)
    }else if(i > 100){
        console.log(g - h)
    }else {
        let p = e * f * g
        alert(p % h)
    }
}

fourFun(2,3,2,2)