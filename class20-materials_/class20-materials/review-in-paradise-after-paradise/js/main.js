// Create a function that takes in an array. If the first number, is less than the last number, alert "Hi". If the first number is greater than the last number, alert "Bye". If they are equal, alert "We close in an hour".
let newArrr = [4, 5, 6, 7, 8, 9, 4]

function compare(a, b){
    if (a < b) {
        alert("Hi")
    } if (a > b) {
        alert("Bye")
    } if (a === b) {
        alert("We close in an hour")
    }
}

compare(newArrr[0],newArrr[newArrr.length - 1])