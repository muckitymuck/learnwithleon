document.querySelector('#yell').addEventListener('click', run)



function run() {
  const fname = document.querySelector("#firstName").value

  document.querySelector("#placeToYell").innerText = `${fname} `



}

