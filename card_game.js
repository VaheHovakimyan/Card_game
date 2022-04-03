let random_num = Math.floor(Math.random() * 24);
var card;// = document.getElementById("card" + random_num);
// let variable_for_add = card + random_num

for(let i = 0; i <= 24; i++){
    card = document.getElementById("card" + i);
}

function Card_flip(){
    card.style.transform = "rotateY(180deg)";
}

card.addEventListener("click",Card_flip);