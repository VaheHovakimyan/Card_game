let card = document.getElementById("card");
let bool = true;

function Card_flip(){
    card.style.transform = "rotateY(180deg)";
    // bool = false;
}

function Card_opposite_flip(){
    card.style.transform = "rotateY(0deg)";
    //bool = true;
}

function Flip_bool(){
    if(bool){
        Card_flip();
        bool = false;
    }else{
        Card_opposite_flip();
        bool = true;
    }
}

card.addEventListener("click", Flip_bool);

///////////////////////////////////////////////////////////////

