document.querySelector('#addBtn').addEventListener('click', (e) => {
  e.preventDefault();
  location.href = "details.html";
  printHeros();
});
const nameHero = document.getElementById('nameHero'),
  heroStrength = document.getElementById('heroStrength'),
  heroImgSrc = document.getElementById('heroImgSrc');

function printHeros() {
  const heroes = JSON.parse(localStorage.getItem('heroesArr'));
  const hero = {
    name: nameHero.value,
    strength: heroStrength.value,
    src: heroImgSrc.value
  };
  heroes.push(hero);
  localStorage.setItem('heroesArr', heroes);


  // // const cardsContainer = document.getElementById('cardsContainer');
  // const div = document.createElement('div');
  // div.innerHTML = `<h5>${nameHero}</h5>
  //   <p calss="col">${heroStrength}</p>
  //   <p calss="col"><a href = "edit.html">${heroImgSrc}</a></p>`
  // localStorage.getItem('nameHero');
  // localStorage.getItem('heroStrength');
  // localStorage.getItem('heroImgSrc');
  // cardsContainer.appendChild(div);
}