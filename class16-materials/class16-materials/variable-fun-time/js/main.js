//--- Easy
//create a variable and assign it a number
let xsum = 5;


//minus 10 from that number

xsum = xsum - 10

//print that number to the console

console.log(xsum)

//--- Medium
//create a variable that holds a value from the input
// let xInput = document.querySelector('#danceDanceRevolution').value

// //add 25 to that number

// xInput = xInput + 25;

//alert that number

//alert(xInput)


//--- Hard
//create a variable that holds the h1
const hVar = document.querySelector('h1')


//add an event listener to that element that console logs the sum of the two previous variables
hVar.addEventListener('click', sum)

function sum(){
    let xInput = document.querySelector('#danceDanceRevolution').value
    xInput = xInput + 25
    console.log(xsum + Number(xInput))
}

