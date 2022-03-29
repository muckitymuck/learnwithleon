//Create a conditonal that checks their age
//If under 16, tell them they can not drive
//If under 18, tell them they can't hate from outside the club, because they can't even get in
//If under 21, tell them they can not drink
//If under 25, tell them they can not rent cars affordably
//If under 30, tell them they can not rent fancy cars affordably
//If under over 30, tell them there is nothing left to look forward too


function inputed(){
    let age = document.querySelector("#danceDanceRevolution").value

    if (age < 16) {
        console.log("You cannot drive");
        document.querySelector("p").innerHTML = "You cannot drive";
    }else if(age < 18) {
        console.log("they can't hate from outside the club, because they can't even get in");
        document.querySelector("p").innerHTML = "they can't hate from outside the club, because they can't even get in";
    } else if(age < 21) {
        console.log("tell them they can not drink")
        document.querySelector("p").innerHTML = "tell them they can not drink";
    }else if(age < 25) {
        console.log("tell them they can not rent cars affordably")
        document.querySelector("p").innerHTML = "tell them they can not rent cars affordably";
    }else if(age < 30) {
        console.log("tell them they can not rent fancy cars affordably")
        document.querySelector("p").innerHTML = "tell them they can not rent fancy cars affordably";
    }else {
        console.log("tell them there is nothing left to look forward too")
        document.querySelector("p").innerHTML = "tell them there is nothing left to look forward too";
    }

}
//--- Harder
//On click of the h1

document.querySelector("h1").addEventListener('click', inputed)

//Take the value from the input
//Place the result of the conditional in the paragraph


