document.querySelector('#check').addEventListener('click', check)
document.querySelector('#day').addEventListener('keydown', function(event) {
    if (event.key === 'Enter'){
      
      check(day);
      day.preventDefault();
    }
}, true);
function check() {

  const day = document.querySelector('#day').value
  let today = ""

  //Conditionals go here
  if (day.toLowerCase() === "tuesday" || day.toLowerCase() === "thursday"){
    console.log("clicked");
    document.getElementById("placeToSee").innerHTML = "Class Day!";
  } else if(day.toLowerCase() === "friday" || day.toLowerCase() === "saturday") {
    document.getElementById("placeToSee").innerHTML = "Weekend!";
  } else if(day.toLowerCase() === "sunday"){
    document.getElementById("placeToSee").innerHTML = "Chill Office Hours!";
  }else {
    document.getElementById("placeToSee").innerHTML = "Boooooooooooooorrrrinnngggg";
  }


}
