let card = document.getElementById("card");

function Card_flip(){
    card.style.transform = "rotateY(180deg)";
}

card.addEventListener("click",Card_flip);