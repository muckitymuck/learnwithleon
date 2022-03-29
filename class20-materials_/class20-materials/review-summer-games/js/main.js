//Create a function that takes in an array of numbers. Multiply each number together and alert the product. 


let newArrr = [1, 2, 3, 4, 5]

function multi(newArrr){
    let out = 1
    for (let i = 0; i < newArrr.length; i++){
        out *= newArrr[i]
    }
    alert(out)
}

multi(newArrr)