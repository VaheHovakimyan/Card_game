//<<<<<<< HEAD

let BackCards = []
let apple = 'url(./images/apple.png)'
let banana = 'url(./images/banana.png)'
let blackberries = 'url(./images/blackberries.png)'
let grapes = 'url(./images/grapes.png)'
let kiwi = 'url(./images/kiwi.png)'
let lemon = 'url(./images/lemon.png)'
let lime = 'url(./images/lime.png)'
let orange = 'url(./images/orange.png)'
let pear = 'url(./images/pear.png)'
let rosehip = 'url(./images/rosehip.png)'
let strawberry = 'url(./images/strawberry.png)'
let watermelon = 'url(./images/watermelon.png)'

let fruits_arr = [apple, banana, blackberries, grapes, kiwi, lemon, lime, orange, pear, rosehip, strawberry, watermelon];

let score = 0;

let game_end = document.getElementById("end_game");
let reload_button = document.getElementById("game_reload");

function Reload_game(){
    document.location.reload();
}
reload_button.addEventListener("click",Reload_game);

// ///////////////////////////////////////////////////////////////
let FirstPartNumsArray = [];
let SecondPartNumsArray = [];

for (let i = 0; i < 12; i++) {
    FirstPartNumsArray.push(i);
    SecondPartNumsArray.push(i)
}


let RandomNumsArr = RandNumbers([...FirstPartNumsArray, ...SecondPartNumsArray]);
function RandNumbers(array) {

    let j = 0;
    let temp = 0;

    for (let i = array.length - 1; i > 0; i -= 1) {

        j = Math.floor(Math.random() * (i + 1))
        temp = array[i]
        array[i] = array[j]
        array[j] = temp
    }
    return array;
}

console.log(RandomNumsArr);


let indexOfCards = [];
let cards = [];
for (let i = 0; i <= 23; i++) {
    indexOfCards.push(i)
    cards.push(document.getElementById(`card${i}`));
    BackCards.push(document.getElementById(`card_back${i}`))
}


const RandomCOlorsofCards = () => {

    BackCards.forEach((item, index) => {


        indexOfCards.forEach(num => {

            if (index == num) {
                item.style = `
                background-image :${fruits_arr[RandomNumsArr[index]]};
                background-size:cover;
                
                `
            }
        })


    })


}


const Cards_flip = () => {

    let current = []


    cards.forEach((it, index) => {

        it.ariaValueNow = RandomNumsArr[index]
        it.addEventListener("click", function () {
            indexOfCards.forEach(num => {
                if (index == num) {
                    it.style = `
                    transform:rotateY(180deg);
                    pointer-events: none;
                    `
                    current.push(it);
                    console.log(current.length);
                    
                     if (current.length % 2 === 0/* && current[0] !== undefined && current[1] !== undefined*/) {

                        setTimeout(() => {



                            if (+current[0].ariaValueNow === +current[1].ariaValueNow) {
                                current[0].style = `
                                visibility: hidden;
                                opacity:0;
                                transition: opacity 0s;
                                `;

                                current[1].style = `
                                visibility: hidden;
                                opacity:0;
                                transition: opacity 0s;
                                `
                                score++;
                                
                                if(true){
                                    end_game.style.top = "30%";
                                
                                }
                                
                                /*return*/

                            } else {

                                current[0].style = `

                                transform:rotateY(0deg);

                                `

                                    ;
                                current[1].style = `

                                transform:rotateY(0deg);
                                `


                            }
                            current = []
                        }, 500)


                    }

                }
            })
        });
    }
    )
}

// score = 12

Cards_flip();
RandomCOlorsofCards();

