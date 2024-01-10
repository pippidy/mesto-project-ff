import { popupEditAvatar, popupEditProfile, formEditProfile, formEditProfileName, formEditProfileDesc, avatarProfileElement, renderSubmitLoading, handleFetchResults } from '../../index.js';
import { postUserInfoRequest, patchAvatarRequest } from '../api/api.js';
import { closeModal } from '../modal/modal.js';

export function editProfilePopup() {
    popupEditProfile.querySelector('input[name="name"]').value = formEditProfileName.textContent;
    popupEditProfile.querySelector('input[name="description"]').value = formEditProfileDesc.textContent;
}

export function submitProfileEdit(nameElement, descElement, form) {
    const name = formEditProfile.querySelector('input[name="name"]').value;
    const desc = formEditProfile.querySelector('input[name="description"]').value;
    const loading = renderSubmitLoading(true, form); // Changes button text and stores it for later use

    postUserInfoRequest(name, desc)
        .then((data) => {
            nameElement.textContent = data.name;
            descElement.textContent = data.about;
        })
        .catch(err => console.log(err))
        .finally(() => renderSubmitLoading(false, form, loading));
}

export function editAvatar(avatarURL, form) {
    const loading = renderSubmitLoading(true, form); // Changes button text and stores it for later use

    patchAvatarRequest(avatarURL)
        .then((data) => {
            avatarProfileElement.setAttribute('style', 'background-image: url(' + data.avatar + ');');
            closeModal(popupEditAvatar);
        })
        .catch(err => console.log(err))
        .finally(() => renderSubmitLoading(false, form, loading));
}