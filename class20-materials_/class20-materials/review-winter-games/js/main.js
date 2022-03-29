//Create a function that takes in an array of numbers. Return a new array containing every even number from the original array (do not use map or filter)

let nums = [1, 2, 3, 4, 5, 6]

function even(arr){
    newArrr = []

    for (let i = 0; i < arr.length; i++){
        if (arr[i] % 2 === 0 ){
            newArrr.push(arr[i])
        }


    }
    return newArrr;

}

function emap(arr){
    let evens = []
    arr.foreach( x => {
        if(x % 2 === 0)
            evens.push(x)
    })
    return evens
}

