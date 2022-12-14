//Film characters
function getCharacters(filmNumber) {
  let output = '';
  fetch(`https://swapi.dev/api/films/${filmNumber}/`)
    .then((d) => d.json())
    .then((films) => {
      films.characters.forEach((url) => {
        fetch(url)
          .then((d) => d.json())
          .then((character) => {
            const characters = document.getElementById(
              `character-text-${filmNumber}`
            );

            output += `
    <div class="card p-3 m-3" style="opacity:.8">
     <p class="api">Name: ${character.name}</p>
     <p class="api">Eye Color: ${character.eye_color}</p>
     <p class="api">Hair Color: ${character.hair_color}</p>
     </div>
      `;
            characters.innerHTML = output;
          });
      });
    });
}

getCharacters(window.location.href.slice(-6, -5) * 1);
