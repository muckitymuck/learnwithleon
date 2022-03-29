// *Variables*
// Declare a variable, reassign it to your favorite food, and alert the value
var faveFood = ""
faveFood = "pizza"
alert(faveFood);


//Declare a variable, assign it a string, alert the second character in the string (Use your google-fu and the MDN)
myName = "muck"
alert(myName[1])

// *Functions*
// Create a function that takes in 3 numbers. Divide the first two numbers and multiply the last. Alert the product. Call the function.
function nums( a,b,c ){
    (a / b) * c;
    
}
alert(nums(4,2,5))
// Create a function that takes in 1 number. Console log the cube root of the number. Call the function.
function num(d){
    console.log(Math.cbrt(d))
}
num(64)

// *Conditionals*
//Create a function that takes in a month. If it is a summer month alert "YAY". If another other month, alert "Booo"
function months(month){
    if (month === "June" || month === "July" || month === "August"){
        alert("YaY")
    }else {
        alert("Booo")
    }
}
months("September")
//*Loops*
//Create a function that takes in a number. Console log every number from 1 to that number while skipping multiples of 5.
function lastNum(f){
    for (let i = 0; i < f; i++){
        if (i % 5 === 0 ){
            console.log(i)
        }
    }
}
lastNum(50)