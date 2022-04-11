//<<<<<<< HEAD
let random_num = Math.floor(Math.random() * 24);
let bool = true;
let a = [];
let b = [];
let Red = Math.floor(Math.random() * 255);
let Blue = Math.floor(Math.random() * 255)
let Green = Math.floor(Math.random() * 255)
let BackCards = []


let apple = "url(./images/apple.png)"
let banana =  'url(./images/banana.png)'
let blackberries =  'url(./images/blackberries.png)'
let grapes =  'url(./images/grapes.png)'
let kiwi =  'url(./images/kiwi.png)'
let lemon =  'url(./images/lemon.png)'
let lime =  'url(./images/lime.png)'
let orange =  'url(./images/orange.png)'
let pear =  'url(./images/pear.png)'
let roseship =  'url(./images/roseship.png)'
let strawberry =  'url(./images/strawberry.png)'
let watermelon =  'url(./images/watermelon.png)'

let fruits_arr = [apple,banana,blackberries,grapes,kiwi,lemon,lime,orange,pear,roseship,strawberry,watermelon];

// console.log(fruits_arr);


// ///////////////////////////////////////////////////////////////
let FirstPartNumsArray = [];
let SecondPartNumsArray = [];

for (let i = 0; i <= 12; i++) {
    FirstPartNumsArray.push(i);
    SecondPartNumsArray.push(i)
}

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

let RandomNumsArr = [...RandNumbers(FirstPartNumsArray), ...RandNumbers(SecondPartNumsArray)]

console.log(RandomNumsArr);

let indexOfCards = [];
let cards = [];
for (let i = 0; i <= 23; i++) {
    indexOfCards.push(i)
    cards.push(document.getElementById(`card${i}`));
    BackCards.push(document.getElementById(`card_back${i}`))
}


//debugger
let done_array = [];

for (let i = 0; i <= 23; i++) {
    BackCards[i].style.backgroundImage = fruits_arr[RandomNumsArr[i]];
}
//console.log(done_array);
const RandomCOlorsofCards = () => {

    BackCards.forEach((item, index) => {

        indexOfCards.forEach(num => {
            if (index == num) {
                item.style.backgroundImage = fruits_arr[index]
                item.style.backgroundSize = "cover"
            }
        })
    })
}



const Cards_flip = () => {
    cards.forEach((it, index) => {
        it.addEventListener("click", () => {
            indexOfCards.forEach(num => {
                if (index == num) {
                    it.style = `
                    transform:rotateY(180deg);
                    `;
                }
            })
        });
    }
    )
}

Cards_flip();
RandomCOlorsofCards();

///////////////////////////////////////////////////////////////