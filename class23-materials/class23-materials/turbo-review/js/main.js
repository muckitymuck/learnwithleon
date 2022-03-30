// *Variables*
// Declare a variable and assign it to a sentance as a string. Alert if the sentance is a question
const blah = "This is a sentence?"
alert(blah.endsWith("?"))

//Declare a variable, assign it a string of multiple words, replace every "jr. dev" with "software engineer", and print it to the console
let jobs = "jr. dev, plumber, electrician, jr. dev"

for (let i = 0; i < jobs.length; i++){
    jobs = jobs.replace('jr. dev', 'software engineer')
}
console.log(jobs)


// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
arr = ["Rock", "Paper", "Scissors"]
function randomJanKen(num){
    return arr[Math.floor(Math.random()* num)]
}
console.log(randomJanKen(3))
// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function
function botVs(hand){
    if (randomJanKen === "Rock" && hand === "Rock"){
        return 
    }
}


//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.
