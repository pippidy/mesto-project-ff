export function enableValidation(validationConfig) {
    const formList = Array.from(document.querySelectorAll(validationConfig.formSelector));

    formList.forEach((formElement) => {
        const inputList = Array.from(formElement.querySelectorAll(validationConfig.inputSelector));

        inputList.forEach((inputElement) => setEventHandlers(formElement, inputElement, validationConfig));
        toggleSubmitButtonState(formElement, validationConfig);
    });
}

export function clearValidation(formElement, validationConfig) {
    const inputList = Array.from(formElement.querySelectorAll(validationConfig.inputSelector));
    const errorList = Array.from(formElement.querySelectorAll(validationConfig.errorClass));

    errorList.forEach((errElement) => {
        errElement.textContent = '';
    });

    inputList.forEach((inputElement) => {
        inputElement.classList.remove(validationConfig.inputErrorClass);
        inputElement.setCustomValidity(''); // Без этого багует кнопка submit при повторном открытии попапа(в некоторых случаях)
    });

    toggleSubmitButtonState(formElement, validationConfig);
}

function setEventHandlers(formElement, inputElement, validationConfig) {
    inputElement.addEventListener('input', () => {
        validateInput(formElement, inputElement, validationConfig);
    });
}

function validateInput(formElement, inputElement, validationConfig) {
    if (inputElement.validity.patternMismatch) {
        inputElement.setCustomValidity(inputElement.dataset.errorMessage);
    } else {
        inputElement.setCustomValidity('');
    }

    if (!inputElement.validity.valid) {
        showValidationError(formElement, inputElement, inputElement.validationMessage, validationConfig);
    } else {
        hideValidationError(formElement, inputElement, validationConfig);
    }

    toggleSubmitButtonState(formElement, validationConfig);
}

function showValidationError(formElement, inputElement, validationMessage, validationConfig) {
    const errorElement = formElement.querySelector('#' + inputElement.dataset.id + '_error');

    inputElement.classList.add(validationConfig.inputErrorClass);
    errorElement.textContent = validationMessage;
}

function hideValidationError(formElement, inputElement, validationConfig) {
    const errorElement = formElement.querySelector('#' + inputElement.dataset.id + '_error');

    inputElement.classList.remove(validationConfig.inputErrorClass);
    errorElement.textContent = '';
}

export function toggleSubmitButtonState(formElement, validationConfig) {
    const buttonElement = formElement.querySelector(validationConfig.submitButtonSelector);

    if (hasInvalidInput(formElement, validationConfig)) {
        buttonElement.classList.add(validationConfig.inactiveButtonClass);
        buttonElement.disabled = true;
    } else {
        buttonElement.classList.remove(validationConfig.inactiveButtonClass);
        buttonElement.disabled = false;
    }
}

function hasInvalidInput(formElement, validationConfig) {
    const inputList = Array.from(formElement.querySelectorAll(validationConfig.inputSelector));

    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    });
}