//Write your pseduo code first! 
document.querySelector('#entertemp').addEventListener('click', convertFC)

//take C 
//assign F as C equation
//console.log

function convertFC(){
    let C = document.querySelector("#ctemp").value
    let F = (C * 9/5) + 32;

    console.log(F)
}



