import './index.css';
import { initialCards, renderCard, addCard, removeCard, openImage, likeCard } from './components/cards/cards.js';
import { closeModal, openModal } from './components/modal/modal.js';
import { editProfilePopup, submitProfileEdit } from './components/profile/profile.js';

// Main container for cards
export const container = document.querySelector('.places__list');

// Array for all of the inputs
const inputs = document.querySelectorAll('input');

// Profile edit popup
const popupEditProfile = document.querySelector('#popup_edit-profile');
const buttonEditProfile = document.querySelector('.profile__edit-button');

// Add place popup
const popupAddPlace = document.querySelector('#popup_add-place');
const popupAddPlaceButton = document.querySelector('.profile__add-button');

// Form for editing profile
const editProfileForm = document.querySelector('[name="edit-profile"]');

// Form for adding a card
const addCardForm = document.querySelector('[name="new-place"]');

// Dropping cards on page load
initialCards.forEach(function (item) {
    container.append(renderCard(item, removeCard, openModal, openImage, likeCard));
});

////////////////////////////////////////
/////////// EVENT LISTENERS ///////////
//////////////////////////////////////

buttonEditProfile.addEventListener('click', () => {
    editProfilePopup();
    openModal(popupEditProfile);
});

popupAddPlaceButton.addEventListener('click', () => openModal(popupAddPlace));

// Editing profile on submit
editProfileForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    submitProfileEdit(evt);
    closeModal();
});

// Adding a card on submit
addCardForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    addCard(evt);
    evt.target.reset();
    closeModal();
});

// Select input's value on focus
for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('focus', (evt) => {
        evt.target.select();
    });
}