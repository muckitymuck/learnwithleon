//Create a function that grabs the number of snacks from the input and tells you to stop that many times

function stopSnack() {

    let num = document.querySelector("input").value
    document.querySelector('#stops').innerText = ""
    for (let i = 0; i <= num; i++){
        document.querySelector('#stops').innerText += "stop"
    }
}

document.querySelector("#help").addEventListener("click", stopSnack)
