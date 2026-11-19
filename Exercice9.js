function ModifText() {
    
    alert("Je vais modifier les divs");
    let Madiv = document.getElementsByName("MaDiv");
    Madiv.forEach(div => div.innerHTML = "Hello");
    
}

ModifText();