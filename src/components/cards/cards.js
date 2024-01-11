import * as GLOBALS from '../../globals.js';
import * as API from '../api/api.js';
import * as MODAL from '../modal/modal.js';

export function createCard(cardData, userID, openModal, openImage, likeCard) {
  const cardTemplate = document.querySelector('#card-template').content;
  const card = cardTemplate.querySelector('.card').cloneNode(true);
  const cardNameElement = card.querySelector('.card__title');
  const cardImgElement = card.querySelector('.card__image');
  const buttonRemoveElement = card.querySelector('.card__delete-button');
  const buttonLikeElement = card.querySelector('.card__like-button');
  const likesCountElement = card.querySelector('.card__like-count');
  const likesCount = cardData.likes.length;

  // Setting up remove button
  if (userID === cardData.ownerId) {
    buttonRemoveElement.classList.add('card__delete-button_visible');
    buttonRemoveElement.addEventListener('click', () => {
      GLOBALS.formRemoveCard.dataset.cardId = cardData.cardId;
      openModal(GLOBALS.popupRemoveCard);
    });
  } else {
    buttonRemoveElement.remove();
  }

  // Make like button checked
  if (likesCount > 0) {
    for (let i = 0; i <= likesCount; i++) {
      if (cardData.likes[i]?._id === userID) {
        buttonLikeElement.classList.add('card__like-button_is-active');
      }
    }
  }

  card.id = 'card_' + cardData.cardId;
  cardNameElement.textContent = cardData.name;
  cardImgElement.src = cardData.url;
  cardImgElement.alt = 'test alt';
  likesCountElement.textContent = likesCount;

  cardImgElement.addEventListener('click', () => openImage(cardData, openModal));
  buttonLikeElement.addEventListener('click', () => {
    likeCard(buttonLikeElement, cardData.cardId, likesCountElement);
  });

  return card;
}

export function removeCardFromDOM(cardId) {
  document.querySelector('#card_' + cardId).remove();
}

export function likeCard(likeButton, cardId, likesCountElement) {
  if (likeButton.classList.contains('card__like-button_is-active')) {
    API.deleteCardLikeRequest(cardId)
      .then((data) => {
        likesCountElement.textContent = data.likes.length;
        likeButton.classList.remove('card__like-button_is-active');
      })
      .catch(err => console.log(err));
  } else {
    API.putCardLikeRequest(cardId)
      .then((data) => {
        likesCountElement.textContent = data.likes.length;
        likeButton.classList.add('card__like-button_is-active');
      })
      .catch(err => console.log(err));
  }
}

export function deleteCard(cardID, form) {
  const loading = GLOBALS.renderSubmitLoading(true, form); // Changes button text and stores it for later use

  API.deleteCardRequest(cardID)
    .then(() => {
      removeCardFromDOM(cardID);
      MODAL.closeModal(GLOBALS.popupRemoveCard);
    })
    .catch(err => console.log(err))
    .finally(() => GLOBALS.renderSubmitLoading(false, form, loading));
}