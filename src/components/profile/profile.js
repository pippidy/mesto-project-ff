import { popupEditProfile, formEditProfile, formEditProfileName, formEditProfileDesc } from '../../index.js';

export function editProfilePopup() {
    popupEditProfile.querySelector('input[name="name"]').value = formEditProfileName.textContent;
    popupEditProfile.querySelector('input[name="description"]').value = formEditProfileDesc.textContent;
}

export function submitProfileEdit() {
    const name = formEditProfile.querySelector('input[name="name"]').value;
    const desc = formEditProfile.querySelector('input[name="description"]').value;

    document.querySelector('.profile__title').textContent = name;
    document.querySelector('.profile__description').textContent = desc;
}