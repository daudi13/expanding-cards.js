const myCards = document.querySelectorAll('.card');

myCards.forEach((card) => {
    card.addEventListener('click', () => {
        removeActiveClass();
        card.classList.add('active');
    })
})

function removeActiveClass() {
    myCards.forEach((card) => {
        card.classList.remove('active')
    })
}