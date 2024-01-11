import * as API from './components/api/api.js';
import * as CARDS from './components/cards/cards.js';
import * as MODAL from './components/modal/modal.js';

export const validationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: '.popup__input_type_error',
    errorClass: '.popup__error'
}

export const userID = await API.getUserInfoRequset()
    .then(data => data._id)
    .catch(err => console.log(err));

export const cardsContainer = document.querySelector('.places__list');

export const popups = document.querySelectorAll('.popup');
export const inputList = document.querySelectorAll('input');
export const popupCloseButtons = document.querySelectorAll('.js_popup-close');

export const popupEditProfile = document.querySelector('#popup_edit-profile');
export const buttonEditProfile = document.querySelector('.profile__edit-button');

export const formEditProfile = document.querySelector('form[name="edit-profile"]');
export const formEditProfileName = document.querySelector('.profile__title');
export const formEditProfileDesc = document.querySelector('.profile__description');

export const popupRemoveCard = document.querySelector('#popup_remove-card');
export const formRemoveCard = document.querySelector('form[name="remove-card"]');

export const popupAddCard = document.querySelector('#popup_add-place');
export const buttonAddCard = document.querySelector('.js_button-card-add');

export const formAddCard = document.querySelector('form[name="new-place"]');
export const inputAddCardName = formAddCard.querySelector('input[name="place-name"]');
export const inputAddCardUrl = formAddCard.querySelector('input[name="link"]');

export const popupOpenImage = document.querySelector('#popup_open-image');
export const popupImageElem = popupOpenImage.querySelector('.js_popup-image');
export const popupImageCaption = popupOpenImage.querySelector('.js_popup-caption');

export const popupEditAvatar = document.querySelector('#popup_edit-avatar');
export const formEditAvatar = document.querySelector('form[name="edit-avatar"]');
export const inputAvatarURL = formEditAvatar.querySelector('.js_input-avatar-url');
export const buttonEditAvatar = document.querySelector('.js_button-avatar-edit');
export const avatarProfileElement = document.querySelector('.js_profile-image');

export function addCard(form) {
    const cardData = {};
    const loading = renderSubmitLoading(true, form); // Changes button text and stores it for later use

    API.postNewCardRequest(inputAddCardName.value, inputAddCardUrl.value)
        .then((card) => {
            cardData.cardId = card._id;
            cardData.ownerId = card.owner._id;
            cardData.name = card.name;
            cardData.url = card.link;
            cardData.likes = card.likes;

            cardsContainer.prepend(CARDS.createCard(cardData, userID, MODAL.openModal, openImage));
            MODAL.closeModal(popupAddCard);
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
    API.getUserInfoRequset()
        .then((data) => {
            formEditProfileName.textContent = data.name;
            formEditProfileDesc.textContent = data.about;
            avatarProfileElement.setAttribute('style', 'background-image: url(' + data.avatar + ');');
        })
        .catch(err => console.log(err));
}

export function renderAllCards() {
    API.getInitialCardsRequest()
        .then((cards) => {
            cards.forEach(function (card) {
                cardsContainer.append(CARDS.createCard({
                    cardId: card._id,
                    ownerId: card.owner._id,
                    name: card.name,
                    url: card.link,
                    likes: card.likes
                }, userID, MODAL.openModal, openImage, CARDS.likeCard));
            });
        })
        .catch(err => console.log(err));
}