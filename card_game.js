let random_num = Math.floor(Math.random() * 24);
let card;
let card_back = document.getElementById("card_back")
// let variable_for_add = card + random_num
var result;
let cards;
let current_card = document.getElementById("card" + random_num)

card_back.style.backgroundColor = "red";

for(let i = 1; i <= 24; i++){
    cards = document.getElementById("card" + i);
    // card.style.transform = "rotateY(180deg)";
    // result = card;
}
console.log(result);

function Card_flip(){
    current_card.style.transform = "rotateY(180deg)";
}

current_card.addEventListener("click",Card_flip);

///////////////////////////////////////////////////////////////

