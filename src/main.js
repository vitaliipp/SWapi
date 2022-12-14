//
async function fetchPerson() {
  const results = await fetch('https://swapi.dev/api/people/1');
  const data = await results.json();

  const person = document.getElementById('person-text');

  person.innerHTML = `
   <p class="api">Name: ${data.name}</p>
   <p class="api">Gender: ${data.gender}</p>
   <p class="api">Hair color: ${data.hair_color}</p>
   <p class="api">Birth year: ${data.birth_year}</p>
    `;
}

// Try/catch errors
async function runFetchPerson() {
  try {
    await fetchPerson();
  } catch (e) {
    console.error(e);
  } finally {
    console.log('We do cleanup here');
  }
}

runFetchPerson();

const results = document.querySelector('#results');

async function asyncFetch(value) {
  const res = await fetch(`http://swapi.dev/api/${value}/`);
  const data = await res.json();
  displayResults(data, value);
}

//Display films and people
function displayResults(data, value) {
  let output = '';
  if (value === 'films') {
    data.results.forEach((item, index) => {
      output += `
            <div class="card p-3 m-3" style="opacity:.8">
            <h4 class="card-title text-center">${item.title}</h4>
            <div class="card-content">
                <span style="text-decoration:underline">Producer</span>:  ${
                  item.producer
                }<br>
                <span style="text-decoration:underline">Director</span>:  ${
                  item.director
                }<br>
                <span style="text-decoration:underline">Release Date</span>:  ${
                  item.release_date
                }<br>
                <p class="text-center">${item.opening_crawl}</p>
                  <div id="buttons1" class= "text-center mb5">
                  <a class="btn btn-primary" id="characters" href="./res/${
                    index + 1
                  }.html" target="_blank"> Characters ${index + 1}</a>
                  </div>
            </div>
            </div>
        `;
    });
  }

  if (value === 'people') {
    data.results.forEach((item) => {
      output += `
            <div class="card p-3 m-3" style="opacity:.8">
            <h4 class="card-title text-center">${item.name}</h4>
            <div class="card-content">
                <span style="text-decoration:underline">Height</span>:  ${item.height}<br>
                <span style="text-decoration:underline">Birth Year</span>:  ${item.birth_year}<br>
                <span style="text-decoration:underline">Eye Color</span>:  ${item.eye_color}<br>
                 
            </div>
            </div>
        `;
    });
  }
  results.innerHTML = output;
}

//event listener for buttons
document.querySelector('#buttons').addEventListener('click', (e) => {
  asyncFetch(e.target.textContent.trim().toLowerCase());
});
