const sliderLine = document.querySelector (".slider-line");
const ButtonNext = document.querySelector ('.slider-next');
const ButtonBack = document.querySelector ('.slider-back');
let scroll = 0; //move from the left edge(зміщення з лівого краю)

ButtonNext.addEventListener ("click", movingLeft, false);
function movingLeft () {
    scroll = scroll + 420; //при натисненні кнопки збільшуємо значення scroll на 420(ширина картинки 420px)
    //щоб не зміщувалося на пусту картинку
    if (scroll > 2100) { //5 pictures * 420px
        scroll = 0;
    }
    sliderLine.style.left = -scroll + 'px'; //'-' in order to move on left
}

ButtonBack.addEventListener ("click", movingRight, false);
function movingRight () {
    scroll = scroll - 420;
    if (scroll < 0) {
        scroll = 2100;
    }
    sliderLine.style.left = -scroll + 'px';
}
