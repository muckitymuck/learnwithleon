// *Variables*
// Create a variable and console log the value

    let x = 25
    console.log(x)

/////////////////////////////


// Create a variable, add 10 to it, and alert the value

    let y = 0
    y = y + 10
    alert(y)


// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference

function subby() {
    let z = 50;
    z = z - 2 - 4 - 5 - 9
    alert(z)
}


// Create a function that divides one number by another and returns the remainder

function divi(a, b) {
    let c = a % b
    return c;
}


// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function jumanji(d,e) {
    let f = d + e;
    if (f > 50){
        alert("Jumanji")
    }
}
let jumanji = (d,e) => {
    let f = d + e;
    if (f > 50 ) over();
    else under();
}
jumanji((10, 45),
    () => alert("Jumanji"),
    () => alert("")
);

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function zerothree(g, h, i){
    let j = g * h * i
    if (j % 3 == 0){
        alert("ZEBRA")
    }
}