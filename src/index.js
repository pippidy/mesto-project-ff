import './index.css';
import { renderCard, deleteCard, likeCard } from './components/cards/cards.js';
import { closeModal, openModal, getOpenedPopup } from './components/modal/modal.js';
import { editProfilePopup, submitProfileEdit, editAvatar } from './components/profile/profile.js';
import { enableValidation, clearValidation, toggleSubmitButtonState } from './components/validation/validation.js';
import { getInitialCards, getUserInfo, postNewCard } from './components/api/api.js';

const validationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: '.popup__input_type_error',
    errorClass: '.popup__error'
}

export const container = document.querySelector('.places__list'); // Main container for cards

const popups = document.querySelectorAll('.popup');
const inputList = document.querySelectorAll('input');
const popupCloseButtons = document.querySelectorAll('.js_popup-close');

export const popupEditProfile = document.querySelector('#popup_edit-profile');
const buttonEditProfile = document.querySelector('.profile__edit-button');

export const formEditProfile = document.querySelector('form[name="edit-profile"]');
export const formEditProfileName = document.querySelector('.profile__title');
export const formEditProfileDesc = document.querySelector('.profile__description');

export const popupRemoveCard = document.querySelector('#popup_remove-card');
export const formRemoveCard = document.querySelector('form[name="remove-card"]');

const popupAddCard = document.querySelector('#popup_add-place');
const buttonAddCard = document.querySelector('.js_button-card-add');

const formAddCard = document.querySelector('form[name="new-place"]');
const inputAddCardName = formAddCard.querySelector('input[name="place-name"]');
const inputAddCardUrl = formAddCard.querySelector('input[name="link"]');

const popupOpenImage = document.querySelector('#popup_open-image');
const popupImageElem = popupOpenImage.querySelector('.js_popup-image');
const popupImageCaption = popupOpenImage.querySelector('.js_popup-caption');

export const popupEditAvatar = document.querySelector('#popup_edit-avatar');
const formEditAvatar = document.querySelector('form[name="edit-avatar"]');
const inputAvatarURL = formEditAvatar.querySelector('.js_input-avatar-url');
const buttonEditAvatar = document.querySelector('.js_button-avatar-edit');
export const avatarProfileElement = document.querySelector('.js_profile-image');

export function handleFetchResults(res) {
    if (res.ok) {
        return res.json();
    } else {
        return Promise.reject(`Ошибка: ${res.status}`);
    }
}

export function addCard(form) {
    const cardData = {};
    const loading = renderSubmitLoading(true, form); // Changes button text and stores it for later use

    postNewCard(inputAddCardName.value, inputAddCardUrl.value)
        .then((res) => {
            return handleFetchResults(res);
        })
        .then((card) => {
            cardData.cardId = card._id;
            cardData.ownerId = card.owner._id;
            cardData.name = card.name;
            cardData.url = card.link;
            cardData.likes = card.likes;

            container.prepend(renderCard(cardData, openModal, openImage));
        })
        .catch(err => console.log(err))
        .finally(() => renderSubmitLoading(false, form, loading));
}

export function openImage(cardData, openModal) {
    popupImageElem.src = cardData.url;
    popupImageElem.alt = 'test alt';
    popupImageCaption.textContent = cardData.name;

    openModal(popupOpenImage);
}

export function renderSubmitLoading(isLoading, form, prevText) {
    const button = form.querySelector('button[type="submit"]');

    if (isLoading) {
        prevText = button.textContent;
        button.textContent = 'Сохранение...';

        return prevText;
    } else {
        button.textContent = prevText;
    }
}

export function renderProfileInfo() {
    getUserInfo()
        .then((res) => {
            return handleFetchResults(res);
        })
        .then((data) => {
            formEditProfileName.textContent = data.name;
            formEditProfileDesc.textContent = data.about;
            avatarProfileElement.setAttribute('style', 'background-image: url(' + data.avatar + ');');
        })
        .catch(err => console.log(err));
}

export function renderAllCards() {
    getInitialCards()
        .then((res) => {
            return handleFetchResults(res);
        })
        .then((cards) => {
            cards.forEach(function (card) {
                container.append(renderCard({
                    cardId: card._id,
                    ownerId: card.owner._id,
                    name: card.name,
                    url: card.link,
                    likes: card.likes
                }, openModal, openImage, likeCard));
            });
        })
        .catch(err => console.log(err));
}

renderProfileInfo();
renderAllCards();

////////////////////////////////////////
/////////// EVENT LISTENERS ///////////
//////////////////////////////////////

buttonEditProfile.addEventListener('click', () => {
    editProfilePopup();
    clearValidation(formEditProfile, validationConfig);
    openModal(popupEditProfile);
});

buttonAddCard.addEventListener('click', () => {
    openModal(popupAddCard);
});

buttonEditAvatar.addEventListener('click', () => {
    openModal(popupEditAvatar);
});

formEditProfile.addEventListener('submit', (evt) => {
    evt.preventDefault();

    submitProfileEdit(formEditProfileName, formEditProfileDesc, formEditProfile);
    closeModal(popupEditProfile);
});

formAddCard.addEventListener('submit', (evt) => {
    evt.preventDefault();

    addCard(formAddCard);
    formAddCard.reset();
    toggleSubmitButtonState(formAddCard, validationConfig);
    closeModal(popupAddCard);
});

formEditAvatar.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const avatarURL = inputAvatarURL.value;

    editAvatar(avatarURL, formEditAvatar);
});

formRemoveCard.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const cardID = formRemoveCard.dataset.cardId;

    deleteCard(cardID, formRemoveCard);
});

popupCloseButtons.forEach(function (item) {
    item.addEventListener('click', () => {
        const popup = getOpenedPopup();
        closeModal(popup);
    });
});

// Closing popup on overlay click
popups.forEach(function (item) {
    item.addEventListener('click', (evt) => {
        const popup = getOpenedPopup();

        if (evt.target === popup) {
            closeModal(popup);
        }
    });
});

inputList.forEach(function (input) {
    input.addEventListener('focus', () => {
        input.select();
    });
});

enableValidation(validationConfig);