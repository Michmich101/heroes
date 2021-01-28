const editName = document.getElementById('heroName'),
  editStrength = document.getElementById('heroStrength'),
  newImgSrc = document.getElementById('heroImgSrc');

const myHero = JSON.parse(localStorage.getItem('editHero'));
window.addEventListener('load', () => {
  if (!myHero) {
    location.href = "details.html";
  }
  editName.value = myHero.name;
  editStrength.value = myHero.power;
})

document.querySelector('#editBtn').addEventListener('click', (e) => {
  e.preventDefault();
  const heroes = JSON.parse(localStorage.getItem('heroesArr'));
  const editedHero = heroes.find(hero => Number(myHero.id) === hero.id);
  editedHero.src = newImgSrc.value;
  localStorage.setItem('heroesArr', JSON.stringify(heroes));
  location.href = "details.html";
})

document.querySelector('#backBtn').addEventListener('click', (e) => {
  e.preventDefault();
  location.href = "details.html";
});