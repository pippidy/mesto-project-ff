export function openModal(popup) {
    popup.classList.add('popup_is-opened');
    popup.classList.remove('popup_is-animated');

    document.addEventListener('keydown', escapeButtonHandler);
}

export function closeModal(popup) {
    popup.classList.add('popup_is-animated');
    popup.classList.remove('popup_is-opened');

    document.removeEventListener('keydown', escapeButtonHandler);
}

function escapeButtonHandler(evt) {
    if (typeof evt.key === 'string') {
        if (evt.key.toLowerCase() === 'escape') {
            const popup = getOpenedPopup();
            closeModal(popup);
        }
    }
}

export function getOpenedPopup() {
    return document.querySelector('.popup_is-opened');
}