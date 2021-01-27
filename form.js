const heroes = [
    {name: "hulk" , power:["smash"] , src: "הענק הירוק.jpg"},
    {name: "batman" , power:["gudjets"] , src: "https://upload.wikimedia.org/wikipedia/he/c/cf/Batman-JimLee.jpg"},
    {name: "superman" , power:["fly"] , src: "https://upload.wikimedia.org/wikipedia/he/7/72/Superman.jpg"},
    {name: "captain-america" , power:"shield" , src: "https://d3m9l0v76dty0.cloudfront.net/system/photos/650767/large/8324ef4967211b85dba0617474e7122b.jpg"},
];

document.querySelector('#addBtn').addEventListener('click',(e)=>{
    e.preventDefault();
    location.href = "details.html";
    printHeros();
});

function printHeros(){
    let nameHero = document.getElementById('nameHero').value;
    let heroStrength = document.getElementById('heroStrength').value;
    let heroImgSrc = document.getElementById('heroImgSrc').value;
    localStorage.setItem('nameHero', nameHero);    
    localStorage.setItem('heroStrength', heroStrength);    
    localStorage.setItem('heroImgSrc', heroImgSrc);    
    
    // const cardsContainer = document.getElementById('cardsContainer');
    const div = document.createElement('div');
    div.innerHTML = `<h5>${nameHero}</h5>
    <p calss="col">${heroStrength}</p>
    <p calss="col"><a href = "edit.html">${heroImgSrc}</a></p>`
    localStorage.getItem('nameHero');
    localStorage.getItem('heroStrength');
    localStorage.getItem('heroImgSrc');
    cardsContainer.appendChild(div);    
}
