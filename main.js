// let a = 'hello'
// let b = 'world'


// console.log(a + ' ' + b);

// alert()

// const a = prompt('Как тебя зовут')

// confirm(a)

// const btn = document.getElementById('btn')
// btn.onclick = fun

// function fun() {
//     a = prompt('asdads')
// }

// console.log(a);

const card = document.getElementById('sneaker')
const card1 = document.getElementById('sneaker1')
const card2 = document.getElementById('sneaker2')
const card3 = document.getElementById('sneaker3')


function myFunction1() {
    card.style.display = 'block'
    card.querySelector('.img').src = card1.querySelector('.img').src
    card.querySelector('.title').innerText = card1.querySelector('.title').innerText
    card.querySelector('.descr').innerText = card1.querySelector('.descr').innerText
}

function myFunction2() {
    card.style.display = 'block'
    card.querySelector('.img').src = card2.querySelector('.img').src
    card.querySelector('.title').innerText = card2.querySelector('.title').innerText
    card.querySelector('.descr').innerText = card2.querySelector('.descr').innerText
}

function myFunction3() {
    card.style.display = 'block'
    card.querySelector('.img').src = card3.querySelector('.img').src
    card.querySelector('.title').innerText = card3.querySelector('.title').innerText
    card.querySelector('.descr').innerText = card3.querySelector('.descr').innerText
}

const popup = document.querySelector('.popup')
const popupOpen = card.querySelector('.btn')
const popupClose = document.querySelector('.popup__close')
const popupCard = document.getElementById('popup__sneaker')

popupOpen.addEventListener('click', function open() {
    popup.classList.add('active')
    popupCard.querySelector('.img').src = card.querySelector('.img').src
    popupCard.querySelector('.title').innerText = card.querySelector('.title').innerText
    popupCard.querySelector('.descr').innerText = card.querySelector('.descr').innerText
})

popupClose.addEventListener('click', function close() {
    popup.classList.remove('active')
})

