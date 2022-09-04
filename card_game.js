//<<<<<<< HEAD

let BackCards = [];
let apple = 'url(./images/apple.png)';
let banana = 'url(./images/banana.png)';
let blackberries = 'url(./images/blackberries.png)';
let grapes = 'url(./images/grapes.png)';
let kiwi = 'url(./images/kiwi.png)';
let lemon = 'url(./images/lemon.png)';
let lime = 'url(./images/lime.png)';
let orange = 'url(./images/orange.png)';
let pear = 'url(./images/pear.png)';
let rosehip = 'url(./images/rosehip.png)';
let strawberry = 'url(./images/strawberry.png)';
let watermelon = 'url(./images/watermelon.png)';

let fruits_arr = [apple, banana, blackberries, grapes, kiwi, lemon, lime, orange, pear, rosehip, strawberry, watermelon];

let score = 0;

let game_end = document.getElementById("end_game");
let reload_button = document.getElementById("game_reload");


function Reload_game() {
    document.location.reload();
}
reload_button.addEventListener("click", Reload_game);

// ///////////////////////////////////////////////////////////////
let FirstPartNumsArray = [];
let SecondPartNumsArray = [];


for (let i = 0; i < 12; i++) {
    FirstPartNumsArray.push(i);
    SecondPartNumsArray.push(i);
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

    BackCards.find((item, index) => {

        indexOfCards.find(num => {

            if (index === num) {
                item.style = `
                background-image :${fruits_arr[RandomNumsArr[index]]};
                background-size:cover;
                
                `
            }
        })

    })

}

let timer;

// function Main_logic() {
//     if (+current[0].current_value === +current[1].current_value) {
//         current[0].style = `
//         visibility: hidden;
//         opacity: 0;
//         transition: 0.5s ease;
//         transform: rotateY(90deg);
//         pointer-events: none;
//         `;

//         current[1].style = `
//         visibility: hidden;
//         opacity: 0;
//         transition: 0.5s ease;
//         transform: rotateY(90deg);
//         pointer-events: none;
//         `;
//         score++;

//         if (score == 12) {
//             end_game.style.top = "30%";
//         }
//         current = [];
//     } else {
//         current[0].style = `
//         transition: 0.5s ease;
//         transform:rotateY(0deg);

//         `;
//         current[1].style = `
//         transition: 0.5s ease;
//         transform:rotateY(0deg);
//         `;
//         current = [];
//     }
// }


const Cards_flip = (callback) => {

    let current = [];


    cards.map((it, index) => {

        it.current_value = RandomNumsArr[index];
        it.addEventListener("click", function () {
            indexOfCards.forEach(num => {
                if (index === num) {
                    it.style = `
                    // transition: 0.5s ease;
                    transform:rotateY(180deg);
                    pointer-events: none;
                    `
                    if (current.length < 2) {
                        current.push(it);
                    }

                    console.log(current);

                    function Main_logic() {
                        if (+current[0].current_value === +current[1].current_value) {
                            current[0].style = `
                            visibility: hidden;
                            opacity: 0;
                            transition: 0.5s ease;
                            transform: rotateY(90deg);
                            pointer-events: none;
                            `;
                    
                            current[1].style = `
                            visibility: hidden;
                            opacity: 0;
                            transition: 0.5s ease;
                            transform: rotateY(90deg);
                            pointer-events: none;
                            `;

                            score++;
                    
                            if (score == 12) {
                                end_game.style.top = "30%";
                            }

                            current = [];
                        } else {
                            current[0].style = `
                            transition: 0.5s ease;
                            transform:rotateY(0deg);
                            pointer-events: none;
                            `;
                            current[1].style = `
                            transition: 0.5s ease;
                            transform:rotateY(0deg);
                            pointer-events: none;
                            `;
                            current = [];
                        }
                    }

                    if (current.length === 2) {
                        var func = setTimeout(() => {
                            callback(Main_logic(current))
                        }, 1000);
                    }else{
                        clearTimeout(func)
                    }

                }
            })
        });
    })
}


Cards_flip(function (current) {
    alert(current.length);
});

RandomCOlorsofCards();