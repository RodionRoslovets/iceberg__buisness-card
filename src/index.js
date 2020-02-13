import './scss/new.scss';

window.addEventListener('DOMContentLoaded', ()=>{
    //меню с контактами
    let contactIcon = document.querySelector('.contacts-icon'),
        closeIcon = document.querySelector('.mobile-contacts__close'),
        contactBlock = document.querySelector('.mobile-contacts');

        if(contactIcon){
            contactIcon.addEventListener('click', () => {
                contactBlock.classList.toggle('mobile-contacts__visible');
            });
            closeIcon.addEventListener('click', () => {
                contactBlock.classList.toggle('mobile-contacts__visible');
            });
        }

    //форма
    let formOverlay = document.querySelector('.overlay'),
        formClose = document.querySelector('.close-form'),
        formButtons = document.querySelectorAll('.call-master');

    formButtons.forEach(form => {
        form.addEventListener('click', () => {
            formOverlay.style.display = 'flex';
            setTimeout(() => formOverlay.classList.add('overlay__visible'), 100);
        });
    });

    formClose.addEventListener('click', () => {
        formOverlay.classList.remove('overlay__visible');
        setTimeout(() => formOverlay.style.display = '', 100);

    });

    formOverlay.addEventListener('click', (e) => {
        if (e.target.classList.contains('overlay')) {
            formOverlay.classList.remove('overlay__visible');
            setTimeout(() => formOverlay.style.display = '', 100);
        }
    });
})
