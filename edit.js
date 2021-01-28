const editName = document.getElementById('heroName');

editName.value = "blablu";





document.querySelector('#backBtn').addEventListener('click', (e) =>{
    e.preventDefault();
    location.href= "details.html";
});


//TODO LIST - details.js
//1. add event listeners to all anchors
//2. locate which ancho was clicked and send the hero details to local storage
//3. redirect to edit.html

//TODO LIST - edit.js
//1. take info from localstoarge, if empty return to details.html
//2. paste the info into the input boxes
//3. take all the changes and save them to local storage
//4. must be an array (to push into localstorage)