const buttonNext = document.querySelector(`.next`);
const buttonPrev = document.querySelector(`.prev`);

buttonNext.addEventListener(`click`, () => {
    buttonPrev.style.display =`block`;
    const activeSlide = document.querySelector(`.slider-item.active`);
    activeSlide.classList.remove(`active`);
    activeSlide.nextElementSibling.classList.add(`active`);

    if (activeSlide.nextElementSibling.nextElementSibling === null) {
        buttonNext.style.display = `none`;
    }
})

buttonPrev.addEventListener(`click`, () => {
    buttonNext.style.display =`block`;
    const activeSlide = document.querySelector(`.slider-item.active`);
    activeSlide.classList.remove(`active`);
    activeSlide.previousElementSibling.classList.add(`active`);

    if (activeSlide.previousElementSibling.previousElementSibling === null) {
        buttonPrev.style.display = `none`;
    }
})