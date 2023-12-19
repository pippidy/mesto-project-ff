export function editProfilePopup() {
    const popup = document.querySelector('#popup_edit-profile');
    const name = document.querySelector('.profile__title').innerHTML;
    const desc = document.querySelector('.profile__description').innerHTML;

    popup.querySelector('input[name="name"]').value = name;
    popup.querySelector('input[name="description"]').value = desc;
}

export function submitProfileEdit() {
    const form = document.querySelector('form[name="edit-profile"]');
    const name = form.querySelector('input[name="name"]').value;
    const desc = form.querySelector('input[name="description"]').value;

    document.querySelector('.profile__title').textContent = name;
    document.querySelector('.profile__description').textContent = desc;
}