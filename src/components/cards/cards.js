import * as cardsData from "./cardsData.js";


export const initialCards = [
  {
    name: "Архыз",
    src: cardsData.cardImg1,
    alt: 'Test img alt 1'
  },
  {
    name: "Челябинская область",
    src: cardsData.cardImg2,
    alt: 'Test img alt 2'
  },
  {
    name: "Иваново",
    src: cardsData.cardImg3,
    alt: 'Test img alt 3'
  },
  {
    name: "Камчатка",
    src: cardsData.cardImg4,
    alt: 'Test img alt 4'
  },
  {
    name: "Холмогорский район",
    src: cardsData.cardImg5,
    alt: 'Test img alt 5'
  },
  {
    name: "Байкал",
    src: cardsData.cardImg6,
    alt: 'Test img alt 6'
  }
];

export function renderCard(cardData, removeCard, openModal, openImage, likeCard) {
  const cardTemplate = document.querySelector('#card-template').content;
  const card = cardTemplate.querySelector('.card').cloneNode(true);
  const cardName = card.querySelector('.card__title');
  const cardImg = card.querySelector('.card__image');
  const buttonRemove = card.querySelector('.card__delete-button');
  const buttonLike = card.querySelector('.card__like-button');

  cardName.textContent = cardData.name;
  cardImg.src = cardData.src;
  cardImg.alt = cardData.alt;

  cardImg.addEventListener('click', () => openImage(cardData, openModal));
  buttonRemove.addEventListener('click', removeCard);
  buttonLike.addEventListener('click', likeCard);

  return card;
}

export function removeCard(event) {
  event.target.closest('.card').remove();
}

export function likeCard(evt) {
  evt.target.classList.toggle('card__like-button_is-active');
}