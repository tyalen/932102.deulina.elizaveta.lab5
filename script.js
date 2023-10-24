const wrapper = document.querySelector('.wrapper');
const newsBtns = document.querySelectorAll('.news__btn');
const popups = document.querySelectorAll('.popup-news');

newsBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        const popup = document.querySelector(    `.popup-news-${index+1}`);
        popup.classList.add('opened');
    });
});

popups.forEach((popup) => {
    popup.addEventListener('click', ($event) => {
        if (!$event.target.closest(".popup-news__content")) {
            popup.classList.remove('opened');
        }
    });
});