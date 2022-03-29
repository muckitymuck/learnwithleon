//Write your pseduo code first! 
///Take the Celcius = C
//multiply C by 2
//add 32



document.querySelector('#convbtn').addEventListener('click', convertTemps)

function convertTemps() {

    const C = document.querySelector("#celcius").value

    let F = (C * 9/5) + 32

    console.log(F)
    document.querySelector("#tempH").innerText = F



}


