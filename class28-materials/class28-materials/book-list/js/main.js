//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  console.log(choice)
  const url = `https://openlibrary.org/isbn/${choice}.json`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        localStorage.setItem('books',data.full_title)
        document.querySelector('h2').innerText = data.full_title;
        document.querySelector('h2').innerText += localStorage.getItem('books')
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

