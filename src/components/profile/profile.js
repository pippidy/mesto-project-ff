import * as GLOBALS from '../../globals.js';
import * as API from '../api/api.js';
import * as MODAL from '../modal/modal.js';

export function editProfilePopup() {
    GLOBALS.popupEditProfile.querySelector('input[name="name"]').value = GLOBALS.formEditProfileName.textContent;
    GLOBALS.popupEditProfile.querySelector('input[name="description"]').value = GLOBALS.formEditProfileDesc.textContent;
}

export function submitProfileEdit(nameElement, descElement, form) {
    const name = GLOBALS.formEditProfile.querySelector('input[name="name"]').value;
    const desc = GLOBALS.formEditProfile.querySelector('input[name="description"]').value;
    const loading = GLOBALS.renderSubmitLoading(true, form); // Changes button text and stores it for later use

    API.postUserInfoRequest(name, desc)
        .then((data) => {
            nameElement.textContent = data.name;
            descElement.textContent = data.about;
            MODAL.closeModal(GLOBALS.popupEditProfile);
        })
        .catch(err => console.log(err))
        .finally(() => GLOBALS.renderSubmitLoading(false, form, loading));
}

export function editAvatar(avatarURL, form) {
    const loading = GLOBALS.renderSubmitLoading(true, form); // Changes button text and stores it for later use

    API.patchAvatarRequest(avatarURL)
        .then((data) => {
            GLOBALS.avatarProfileElement.setAttribute('style', 'background-image: url(' + data.avatar + ');');
            MODAL.closeModal(GLOBALS.popupEditAvatar);
        })
        .catch(err => console.log(err))
        .finally(() => GLOBALS.renderSubmitLoading(false, form, loading));
}