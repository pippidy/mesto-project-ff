import { popupRemoveCard, formRemoveCard, renderSubmitLoading, handleFetchResults } from '../../index.js';
import { closeModal } from '../modal/modal.js';
import { getUserInfo, putCardLike, deleteCardLike, deleteCardRequest } from '../api/api.js';

export function renderCard(cardData, openModal, openImage, likeCard) {
  const cardTemplate = document.querySelector('#card-template').content;
  const card = cardTemplate.querySelector('.card').cloneNode(true);
  const cardNameElement = card.querySelector('.card__title');
  const cardImgElement = card.querySelector('.card__image');
  const buttonRemoveElement = card.querySelector('.card__delete-button');
  const buttonLikeElement = card.querySelector('.card__like-button');
  const likesCountElement = card.querySelector('.card__like-count');
  const likesCount = cardData.likes.length;

  getUserInfo()
    .then((res) => {
      return handleFetchResults(res);
    })
    .then((user) => {

      // Setting up remove button
      if (user._id === cardData.ownerId) {
        buttonRemoveElement.classList.add('card__delete-button_visible');
        buttonRemoveElement.addEventListener('click', () => {
          formRemoveCard.dataset.cardId = cardData.cardId;
          openModal(popupRemoveCard);
        });
      } else {
        buttonRemoveElement.remove();
      }

      // Make like button checked
      if (likesCount > 0) {
        for (let i = 0; i <= likesCount; i++) {
          if (cardData.likes[i]?._id === user._id) {
            buttonLikeElement.classList.add('card__like-button_is-active');
          }
        }
      }

      card.id = 'card_' + cardData.cardId;
      cardNameElement.textContent = cardData.name;
      cardImgElement.src = cardData.url;
      cardImgElement.alt = 'test alt';
      likesCountElement.textContent = likesCount;
    })
    .catch(err => console.log(err));

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
    deleteCardLike(cardId)
      .then((res) => {
        return handleFetchResults(res);
      }).then((data) => {
        likesCountElement.textContent = data.likes.length;
        likeButton.classList.remove('card__like-button_is-active');
      })
      .catch(err => console.log(err));
  } else {
    putCardLike(cardId)
      .then((res) => {
        return handleFetchResults(res);
      })
      .then((data) => {
        likesCountElement.textContent = data.likes.length;
        likeButton.classList.add('card__like-button_is-active');
      })
      .catch(err => console.log(err));
  }
}

export function deleteCard(cardID, form) {
  const loading = renderSubmitLoading(true, form); // Changes button text and stores it for later use

  deleteCardRequest(cardID)
    .then((res) => {
      return handleFetchResults(res);
    })
    .then(() => {
      removeCardFromDOM(cardID);
      closeModal(popupRemoveCard);
    })
    .catch(err => console.log(err))
    .finally(() => renderSubmitLoading(false, form, loading));
}