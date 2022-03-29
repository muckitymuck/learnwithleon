//Create an array of movie titles. Loop through the array and each element to the h2.
let movies = ["Back to the Future", "Back to the Future II", "Back to the Future III"]

for (let i = 0; i < movies.length; i++){
    document.querySelector('h2').innerText += movies[i]
}




//Create an array of numbers. Loop through the array and three to each number and replace the old number.
let nums = [1, 2, 3, 4]

nums.forEach((item, indx ) => {
    nums[indx] += 3
})


//Find the average of all the numbers from question three
let finalAvg = 0

nums.forEach((item, indx ) => {
    finalAvg += nums[indx]  
})
finalAvg = finalAvg / nums.length
