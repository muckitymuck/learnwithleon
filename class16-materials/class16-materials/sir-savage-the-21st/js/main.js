//Create a function that has a loop that prints '21' 21 times to the console and then call that function
//Bonus can you make it print '21' 21 times to the dom?
function twentyone(){
    for( let i = 0; i < 22; i++){
        console.log('21');
       document.querySelector("#savageSays").innerText += "21"
    }
}

twentyone()