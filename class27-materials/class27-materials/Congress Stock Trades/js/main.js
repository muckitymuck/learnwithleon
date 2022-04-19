//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
document.querySelector('button').addEventListener('click',getData)
function getData() {
    let input = document.querySelector("input").value
    fetch(`https://house-stock-watcher-data.s3-us-west-2.amazonaws.com/data/all_transactions.json`)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
            console.log(data)
            //document.querySelector('h2').innerText = data.drinks[0].strDrink
            //document.querySelector('img').src = data.drinks[0].strDrinkThumb
            //document.querySelector('h3').innerText = data.drinks[0].strInstructions
        })
        .catch(err => {
            console.log(`error ${err}`)
    });
}
