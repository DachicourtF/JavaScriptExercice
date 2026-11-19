function ModifText(Coucou) {
   
    alert("Je vais modifier la div");
    let Madiv = document.getElementById('MaDiveNum1');
    Madiv.innerHTML = "Hello";
}

ModifText("Coucou");