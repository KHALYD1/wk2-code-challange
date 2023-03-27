
  document.addEventListener("DOMContentLoaded", () => {
    function renderAnimal(animal) {
      let list = document.createElement("div");
      list.className = "card";
      list.innerHTML = `
          <img src="${animal.image}">
          <div class="content">
          <p class="name">${animal.name}</p>
          <p class="votes">${animal.votes}</p>
          <button class="btn">vote</button>
          </div>
          `;
      document.querySelector("#main").appendChild(list);
      // document.body.main.appendChild(list);
    }
  
    function getAnimal() {
      fetch("http://localhost:3000/characters", {
        method: "GET",
        headers: {
          "content-type": "applictaion/json",
        },
      })
        .then((response) => {
          return response.json();
        })
        .then((characters) =>
          characters.forEach((element) => {
            renderAnimal(element);
          })
        )
        .catch((err) => console.log(err));
    }
    function init() {
      getAnimal();
    }
    init();
  });