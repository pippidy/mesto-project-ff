import './index.css';
import { initialCards, renderCard, removeCard, likeCard } from './components/cards/cards.js';
import { closeModal, openModal, getOpenedPopup } from './components/modal/modal.js';
import { editProfilePopup, submitProfileEdit } from './components/profile/profile.js';

// Main container for cards
export const container = document.querySelector('.places__list');

// Gathering elements in arrays
const popups = document.querySelectorAll('.popup');
const inputs = document.querySelectorAll('input');
const popupCloseButtons = document.querySelectorAll('.js_popup-close');

// Profile editing popup
export const popupEditProfile = document.querySelector('#popup_edit-profile');
const buttonEditProfile = document.querySelector('.profile__edit-button');

// Profile editing form
export const formEditProfile = document.querySelector('[name="edit-profile"]');
export const formEditProfileName = document.querySelector('.profile__title');
export const formEditProfileDesc = document.querySelector('.profile__description');

// Card adding popup
const popupAddCard = document.querySelector('#popup_add-place');
const popupAddCardButton = document.querySelector('.profile__add-button');

// Card adding form
const formAddCard = document.querySelector('[name="new-place"]');
const inputAddCardName = formAddCard.querySelector('input[name="place-name"]');
const inputAddCardSrc = formAddCard.querySelector('input[name="link"]');

// Open image popup
const popupOpenImage = document.querySelector('#popup_open-image');
const popupImageElem = popupOpenImage.querySelector('.popup__image');
const popupImageCaption = popupOpenImage.querySelector('.popup__caption');

export function addCard() {
    const cardData = {};

    cardData.name = inputAddCardName.value;
    cardData.src = inputAddCardSrc.value;

    container.prepend(renderCard(cardData, removeCard, openModal, openImage));
}

// Dropping cards on page load
initialCards.forEach(function (item) {
    container.append(renderCard(item, removeCard, openModal, openImage, likeCard));
});

export function openImage(cardData, openModal) {
    popupImageElem.src = cardData.src;
    popupImageElem.alt = cardData.alt;
    popupImageCaption.textContent = cardData.name;

    openModal(popupOpenImage);
}

////////////////////////////////////////
/////////// EVENT LISTENERS ///////////
//////////////////////////////////////

buttonEditProfile.addEventListener('click', () => {
    editProfilePopup();
    openModal(popupEditProfile);
});

popupAddCardButton.addEventListener('click', () => openModal(popupAddCard));

// Editing profile on submit
formEditProfile.addEventListener('submit', (evt) => {
    evt.preventDefault();

    submitProfileEdit(evt);
    closeModal(popupEditProfile);
});

// Adding a card on submit
formAddCard.addEventListener('submit', (evt) => {
    evt.preventDefault();

    addCard(evt);
    evt.target.reset();
    closeModal(popupAddCard);
});

// Closing popup using button
popupCloseButtons.forEach(function (item) {
    item.addEventListener('click', () => {
        const popup = getOpenedPopup();

        closeModal(popup)
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

// Select input's value on focus
inputs.forEach(function (item) {
    item.addEventListener('focus', (evt) => {
        evt.target.select();
    });
});