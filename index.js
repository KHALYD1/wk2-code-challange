// Make a GET request to retrieve the character data from the server

fetch('http://localhost:3000/characters')
  .then(response => response.json())
  .then(data => {

    // Display the animal names in the HTML

    const animalList = document.querySelector('#animal-list');
    data.forEach(animal => {
      const listItem = document.createElement('li');
      listItem.textContent = animal.name;
      listItem.addEventListener('click', () => showAnimalDetails(animal.id));
      animalList.appendChild(listItem);
    });
  });


// Make a GET request to retrieve the animal's details from the server

function showAnimalDetails(animalId) {
  fetch(`http://localhost:3000/characters/${animalId}`)
    .then(response => response.json())
    .then(animal => {

      // Display the animal's image and number of votes in the HTML

      const animalDetails = document.querySelector('#animal-details');
      animalDetails.innerHTML = `
        <h2>${animal.name}</h2>
        <img src="${animal.image}">
        <p>Number of votes: <span id="votes">${animal.votes}</span></p>
        <button id="vote-btn">Vote</button>
      `;

      // Add an event listener to the vote button to update the number of votes

      const voteButton = document.querySelector('#vote-btn');
      const votesDisplay = document.querySelector('#votes');
      voteButton.addEventListener('click', () => {
        animal.votes++;
        votesDisplay.textContent = animal.votes;
      });
    });
}