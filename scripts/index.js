const container = document.querySelector('.places__list');
const cardTemplate = document.querySelector('#card-template').content;

function makeCard(name, imgLink, removeCard) {
    const card = cardTemplate.querySelector('.card').cloneNode(true);
    const cardName = card.querySelector('.card__title');
    const cardImg = card.querySelector('.card__image');
    const buttonRemove = card.querySelector('.card__delete-button');

    cardName.textContent = name;
    cardImg.src = imgLink;

    buttonRemove.addEventListener('click', removeCard);

    return card;
}

function removeCard(event) {
    event.target.closest('.card').remove();
}

initialCards.forEach(function (item) {
    container.append(makeCard(item.name, item.link, removeCard));
});
