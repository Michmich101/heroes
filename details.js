 // HEAD
 document.querySelector('#add').addEventListener('click', () => {
   location.href = "form.html";
 });

 window.addEventListener('load', () => {
   const heroes = JSON.parse(localStorage.getItem('heroesArr'));
   if (!heroes) {
     saveToStorage();
   }
   const cardGroup = document.getElementById('cardsContainer');
   for (let hero of heroes) {
     const card = document.createElement('div');
     card.classList.add('card');
     card.innerHTML = `<img src="${hero.src}" class="card-img-top img" alt="hero">
  <div class="card-body">
    <h5 class="card-title">${hero.name}</h5>
    <p class="card-text">${hero.power}</p>
    <p class="card-text"><a id="${hero.id}" class="text-muted">Edit hero details</a></p>
  </div>`;
     cardGroup.appendChild(card);
   }
   const anchors = document.querySelectorAll('a');
   for (let anchor of anchors) {
     anchor.addEventListener('click', sendToEdit);
   }
 });

 function sendToEdit() {
   const heroes = JSON.parse(localStorage.getItem('heroesArr'));
   const hero = heroes.find(hero => Number(this.id) === hero.id);
   localStorage.setItem('editHero', JSON.stringify(hero));
   location.href = "edit.html";
 }

 //TODO LIST - details.js
 //1. add event listeners to all anchors
 //2. locate which ancho was clicked and send the hero details to local storage
 //3. redirect to edit.html



 function saveToStorage() {
   const defaultHeroes = [{
       id: 1,
       name: "Hulk",
       power: "Smash Force",
       src: "הענק הירוק.jpg"
     },
     {
       id: 2,
       name: "Batman",
       power: "Gadgets Master",
       src: "https://upload.wikimedia.org/wikipedia/he/c/cf/Batman-JimLee.jpg"
     },
     {
       id: 3,
       name: "Superman",
       power: "Super strength",
       src: "https://upload.wikimedia.org/wikipedia/he/7/72/Superman.jpg"
     },
     {
       id: 4,
       name: "Captain-America",
       power: "Retractable Shield",
       src: "https://d3m9l0v76dty0.cloudfront.net/system/photos/650767/large/8324ef4967211b85dba0617474e7122b.jpg"
     }
   ];
   localStorage.setItem('heroesArr', JSON.stringify(defaultHeroes));
 }