import './index.css';
import * as GLOBALS from './globals.js';
import * as CARDS from './components/cards/cards.js';
import * as MODAL from './components/modal/modal.js';
import * as PROFILE from './components/profile/profile.js';
import * as VALID from './components/validation/validation.js';

GLOBALS.renderProfileInfo();
GLOBALS.renderAllCards();
VALID.enableValidation(GLOBALS.validationConfig);

////////////////////////////////////////
/////////// EVENT LISTENERS ///////////
//////////////////////////////////////

GLOBALS.buttonEditProfile.addEventListener('click', () => {
    PROFILE.editProfilePopup();
    VALID.clearValidation(GLOBALS.formEditProfile, GLOBALS.validationConfig);
    MODAL.openModal(GLOBALS.popupEditProfile);
});

GLOBALS.buttonAddCard.addEventListener('click', () => {
    MODAL.openModal(GLOBALS.popupAddCard);
});

GLOBALS.buttonEditAvatar.addEventListener('click', () => {
    MODAL.openModal(GLOBALS.popupEditAvatar);
});

GLOBALS.formEditProfile.addEventListener('submit', (evt) => {
    evt.preventDefault();

    PROFILE.submitProfileEdit(GLOBALS.formEditProfileName, GLOBALS.formEditProfileDesc, GLOBALS.formEditProfile);
});

GLOBALS.formAddCard.addEventListener('submit', (evt) => {
    evt.preventDefault();

    GLOBALS.addCard(GLOBALS.formAddCard);
    GLOBALS.formAddCard.reset();
    VALID.toggleSubmitButtonState(GLOBALS.formAddCard, GLOBALS.validationConfig);
});

GLOBALS.formEditAvatar.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const avatarURL = GLOBALS.inputAvatarURL.value;

    PROFILE.editAvatar(avatarURL, GLOBALS.formEditAvatar);
});

GLOBALS.formRemoveCard.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const cardID = GLOBALS.formRemoveCard.dataset.cardId;

    CARDS.deleteCard(cardID, GLOBALS.formRemoveCard);
});

GLOBALS.popupCloseButtons.forEach(function (item) {
    item.addEventListener('click', () => {
        const popup = MODAL.getOpenedPopup();
        MODAL.closeModal(popup);
    });
});

// Closing popup on overlay click
GLOBALS.popups.forEach(function (item) {
    item.addEventListener('mousedown', (evt) => {
        const popup = MODAL.getOpenedPopup();

        if (evt.target === popup) {
            MODAL.closeModal(popup);
        }
    });
});

GLOBALS.inputList.forEach(function (input) {
    input.addEventListener('focus', () => {
        input.select();
    });
});