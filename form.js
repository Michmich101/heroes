document.querySelector('#addBtn').addEventListener('click', (e) => {
  e.preventDefault();
  printHeros();
  location.href = "details.html";
});
const heroName = document.getElementById('heroName'),
  heroStrength = document.getElementById('heroStrength'),
  heroImgSrc = document.getElementById('heroImgSrc');

function printHeros() {
  const heroes = JSON.parse(localStorage.getItem('heroesArr'));
  const hero = {
    id: heroes[heroes.length - 1].id + 1,
    name: heroName.value,
    power: heroStrength.value,
    src: heroImgSrc.value
  };
  heroes.push(hero);
  localStorage.setItem('heroesArr', JSON.stringify(heroes));
}