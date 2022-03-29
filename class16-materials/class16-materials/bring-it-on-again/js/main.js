// *Variables*
// Declare a variable, assign it a value, and alert the value

const num = 7;
alert(num)

// Create a variable, divide it by 10, and console log the value

let numtwo = 3;
numtwo += 10
console.log(numtwo)

// *Functions*
// Create a function that multiplys 3 numbers and alerts the product
function thrice(a, b, c){
    let tree = a * b * c
    alert(tree)
}
thrice(2, 3, 4);
// Create a function that takes in 4 numbers. Add the first two numbers and subtract the next two. Console log the result
function fours(d, e, f, g){
    let forout = d + e - f - g;
    console.log(forout)
}

fours(2, 3, 4, 5)
// *Conditionals*
// Create a function that takes in 3 numbers. Starting with 100 add the first number, subtract the second, and divide the third. If the value is greater then 25, console log "WE HAVE A WINNNA"

function condi(h, i, j){
    let condout = (100 + h - i) / j
    if (condout > 25){
        console.log("We have a winner")
    }
}
condi(10, 60, 3)

// Create a function that takes in a day of the week. If it is a weekend alert, "weekend" and if not alert "week day". Handle capitilization and if the user does not enter a day of the week alert "Try again!"

function weekend(day){
    const dayoftheweek = day.toLowerCase()
    if (dayoftheweek === "saturday" || 
    dayoftheweek === "sunday"){
        alert("weekend")
    } else if (dayoftheweek === "monday" || 
    dayoftheweek === "tuesday" || 
    dayoftheweek === "wednesday" || 
    dayoftheweek === "thursday" || 
    dayoftheweek === "friday" ) {
        alert("week day")
    } else {
        alert("try again")
    }
}
weekend("Wednesday")


//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number or greater, but count by 3
function loopy(numb){
    for (let i = 0; i <= numb; i += 3){
        console.log(i)
    }
}

loopy(16)