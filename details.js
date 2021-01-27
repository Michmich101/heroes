 // HEAD
 document.querySelector('#add').addEventListener('click', () => {
   location.href = "form.html";
 });

window.addEventListener('load', ()=>{
  const cardGroup = document.getElementById('cardsContainer');
  for (let hero of defaultHeroes){
  const card = document.createElement('div');
  card.classList.add('card');
  card.innerHTML = `<img src="${hero.src}" class="card-img-top img" alt="hero">
  <div class="card-body">
    <h5 class="card-title">${hero.name}</h5>
    <p class="card-text">${hero.power}</p>
    <p class="card-text"><a href="edit.html" class="text-muted">Edit hero details</a></p>
  </div>`;
  cardGroup.appendChild(card);
  }
});



 const defaultHeroes = [{
     name: "Hulk",
     power: "Smash Force",
     src: "הענק הירוק.jpg"
   },
   {
     name: "Batman",
     power: "Gadgets Master",
     src: "https://upload.wikimedia.org/wikipedia/he/c/cf/Batman-JimLee.jpg"
   },
   {
     name: "Superman",
     power: "Super strength",
     src: "https://upload.wikimedia.org/wikipedia/he/7/72/Superman.jpg"
   },
   {
     name: "Captain-America",
     power: "Retractable Shield",
     src: "https://d3m9l0v76dty0.cloudfront.net/system/photos/650767/large/8324ef4967211b85dba0617474e7122b.jpg"
   }

 ];