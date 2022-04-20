//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
document.querySelector('button').addEventListener('click',getData)
function getData() {
    let input = document.querySelector("input").value
    fetch(`https://api.openbrewerydb.org/breweries?by_city=${input}`)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
            console.log(data[0])
            if (data.length > 0) {
                var temp = "";
                data.forEach((itemData) => {
                    
                
                    temp += "<tr>";
                    temp += "<td>" + itemData.name + "</td>";
                    temp += "<td>" + itemData.street + "</td>";
                    temp += "<td>" + itemData.city + "</td>";
                    temp += "<td>" + itemData.state + "</td>";
                    temp += "<td>" + itemData.phone + "</td></tr>";
                });
                document.getElementById('data').innerHTML = temp;
                
            }

        })
        .catch(err => {
            console.log(`error ${err}`)
    });
}
