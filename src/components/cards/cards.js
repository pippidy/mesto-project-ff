import { container } from "../../index.js";
import { openModal } from "../modal/modal.js";

const cardImg1 = new URL('https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg', import.meta.url);
const cardImg2 = new URL('https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg', import.meta.url);
const cardImg3 = new URL('https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg', import.meta.url);
const cardImg4 = new URL('https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg', import.meta.url);
const cardImg5 = new URL('https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg', import.meta.url);
const cardImg6 = new URL('https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg', import.meta.url);

export const initialCards = [
  {
    name: "Архыз",
    src: cardImg1
  },
  {
    name: "Челябинская область",
    src: cardImg2
  },
  {
    name: "Иваново",
    src: cardImg3
  },
  {
    name: "Камчатка",
    src: cardImg4
  },
  {
    name: "Холмогорский район",
    src: cardImg5
  },
  {
    name: "Байкал",
    src: cardImg6
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

  cardImg.addEventListener('click', () => openImage(cardData, openModal));
  buttonRemove.addEventListener('click', removeCard);
  buttonLike.addEventListener('click', likeCard);

  return card;
}

export function addCard(evt) {
  const target = evt.target;
  const cardData = {};

  cardData.name = target.querySelector('input[name="place-name"]').value;
  cardData.src = target.querySelector('input[name="link"]').value;

  container.prepend(renderCard(cardData, removeCard, openModal, openImage));
}

export function openImage(cardData, openModal) {
  const popup = document.querySelector('#popup_open-image');
  const image = popup.querySelector('.popup__image');
  const caption = popup.querySelector('.popup__caption');

  image.src = cardData.src;
  caption.textContent = cardData.name;

  openModal(popup);
}

export function removeCard(event) {
  event.target.closest('.card').remove();
}

export function likeCard(evt) {
  evt.target.classList.toggle('card__like-button_is-active');
}