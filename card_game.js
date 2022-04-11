//<<<<<<< HEAD
let random_num = Math.floor(Math.random() * 24);
let bool = true;
let a = [];

let b = [];
let Red = Math.floor(Math.random() * 255);
let Blue = Math.floor(Math.random() * 255)
let Green = Math.floor(Math.random() * 255)
let BackCards = []

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

        j = Math.ceil(Math.random() * i)
        temp = array[i]
        array[i] = array[j]
        array[j] = temp
    }

    return array
}

let RandomNumsArr = [...RandNumbers(FirstPartNumsArray), ...RandNumbers(SecondPartNumsArray)]


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
                    background-color:rgb(${Red},${Blue},${Green})
                    `;
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