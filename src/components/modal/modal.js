export function openModal(popup) {
    const buttonClose = popup.querySelector('.js_popup-close');

    popup.classList.add('popup_is-opened');
    popup.classList.remove('popup_is-animated');

    document.addEventListener('keyup', escapeButtonHandler);
    popup.addEventListener('click', (evt) => {
        if (evt.target === document.querySelector('.popup_is-opened')) {
            closeModal();
        }
    });
    buttonClose.addEventListener('click', closeModal);
}

export function closeModal() {
    const popup = document.querySelector('.popup_is-opened');
    const buttonClose = popup.querySelector('.js_popup-close');

    popup.classList.add('popup_is-animated');
    popup.classList.remove('popup_is-opened');

    document.removeEventListener('keyup', escapeButtonHandler);
    buttonClose.removeEventListener('click', closeModal);
}

function escapeButtonHandler(evt) {
    if (typeof evt.key === 'string') { // Без этой проверки багует, когда выбираешь предлагаемое браузером значение в выпадающем списке для инпутов. Ругается на toLowercase()
        if (evt.key.toLowerCase() === 'escape') {
            closeModal();
        }
    }
}