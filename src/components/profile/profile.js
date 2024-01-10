import { popupEditAvatar, popupEditProfile, formEditProfile, formEditProfileName, formEditProfileDesc, avatarProfileElement, renderSubmitLoading, handleFetchResults } from '../../index.js';
import { postUserInfo, patchAvatar } from '../api/api.js';
import { closeModal } from '../modal/modal.js';

export function editProfilePopup() {
    popupEditProfile.querySelector('input[name="name"]').value = formEditProfileName.textContent;
    popupEditProfile.querySelector('input[name="description"]').value = formEditProfileDesc.textContent;
}

export function submitProfileEdit(nameElement, descElement, form) {
    const name = formEditProfile.querySelector('input[name="name"]').value;
    const desc = formEditProfile.querySelector('input[name="description"]').value;
    const loading = renderSubmitLoading(true, form); // Changes button text and stores it for later use

    postUserInfo(name, desc)
        .then((res) => {
            return handleFetchResults(res);
        })
        .then((data) => {
            nameElement.textContent = data.name;
            descElement.textContent = data.about;
        })
        .catch(err => console.log(err))
        .finally(() => renderSubmitLoading(false, form, loading));
}

export function editAvatar(avatarURL, form) {
    const loading = renderSubmitLoading(true, form); // Changes button text and stores it for later use

    patchAvatar(avatarURL)
        .then((res) => {
            return handleFetchResults(res);
        }).then((data) => {
            avatarProfileElement.setAttribute('style', 'background-image: url(' + data.avatar + ');');
            closeModal(popupEditAvatar);
        })
        .catch(err => console.log(err))
        .finally(() => renderSubmitLoading(false, form, loading));
}