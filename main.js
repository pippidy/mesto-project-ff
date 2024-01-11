/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/api/api.js":
/*!***********************************!*\
  !*** ./src/components/api/api.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   deleteCardLikeRequest: () => (/* binding */ deleteCardLikeRequest),\n/* harmony export */   deleteCardRequest: () => (/* binding */ deleteCardRequest),\n/* harmony export */   getInitialCardsRequest: () => (/* binding */ getInitialCardsRequest),\n/* harmony export */   getUserInfoRequset: () => (/* binding */ getUserInfoRequset),\n/* harmony export */   handleFetchResults: () => (/* binding */ handleFetchResults),\n/* harmony export */   patchAvatarRequest: () => (/* binding */ patchAvatarRequest),\n/* harmony export */   postNewCardRequest: () => (/* binding */ postNewCardRequest),\n/* harmony export */   postUserInfoRequest: () => (/* binding */ postUserInfoRequest),\n/* harmony export */   putCardLikeRequest: () => (/* binding */ putCardLikeRequest)\n/* harmony export */ });\nconst config = {\n  baseUrl: 'https://nomoreparties.co/v1/wff-cohort-4',\n  headers: {\n    authorization: 'dd9cf07b-6aff-44f1-b3aa-ee93c9db031f',\n    'Content-Type': 'application/json'\n  }\n};\nfunction handleFetchResults(res) {\n  if (res.ok) {\n    return res.json();\n  } else {\n    return Promise.reject(`Ошибка: ${res.status}`);\n  }\n}\nconst getInitialCardsRequest = () => {\n  return fetch(config.baseUrl + '/cards', {\n    headers: config.headers\n  }).then(res => {\n    return handleFetchResults(res);\n  });\n};\nconst getUserInfoRequset = () => {\n  return fetch(config.baseUrl + '/users/me', {\n    headers: config.headers\n  }).then(res => {\n    return handleFetchResults(res);\n  });\n};\nconst postUserInfoRequest = (userName, userDesc) => {\n  return fetch(config.baseUrl + '/users/me', {\n    method: 'PATCH',\n    headers: config.headers,\n    body: JSON.stringify({\n      name: userName,\n      about: userDesc\n    })\n  }).then(res => {\n    return handleFetchResults(res);\n  });\n};\nconst postNewCardRequest = (cardName, cardUrl) => {\n  return fetch(config.baseUrl + '/cards', {\n    method: 'POST',\n    headers: config.headers,\n    body: JSON.stringify({\n      name: cardName,\n      link: cardUrl\n    })\n  }).then(res => {\n    return handleFetchResults(res);\n  });\n};\nconst deleteCardRequest = cardId => {\n  return fetch(config.baseUrl + '/cards/' + cardId, {\n    method: 'DELETE',\n    headers: config.headers\n  }).then(res => {\n    return handleFetchResults(res);\n  });\n};\nconst putCardLikeRequest = cardId => {\n  return fetch(config.baseUrl + '/cards/likes/' + cardId, {\n    method: 'PUT',\n    headers: config.headers\n  }).then(res => {\n    return handleFetchResults(res);\n  });\n};\nconst deleteCardLikeRequest = cardId => {\n  return fetch(config.baseUrl + '/cards/likes/' + cardId, {\n    method: 'DELETE',\n    headers: config.headers\n  }).then(res => {\n    return handleFetchResults(res);\n  });\n};\nconst patchAvatarRequest = avatarURL => {\n  return fetch(config.baseUrl + '/users/me/avatar', {\n    method: 'PATCH',\n    headers: config.headers,\n    body: JSON.stringify({\n      avatar: avatarURL\n    })\n  }).then(res => {\n    return handleFetchResults(res);\n  });\n};\n\n//# sourceURL=webpack://default_project_html-css-js-webpack/./src/components/api/api.js?");

/***/ }),

/***/ "./src/components/cards/cards.js":
/*!***************************************!*\
  !*** ./src/components/cards/cards.js ***!
  \***************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createCard: () => (/* binding */ createCard),\n/* harmony export */   deleteCard: () => (/* binding */ deleteCard),\n/* harmony export */   likeCard: () => (/* binding */ likeCard),\n/* harmony export */   removeCardFromDOM: () => (/* binding */ removeCardFromDOM)\n/* harmony export */ });\n/* harmony import */ var _globals_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../globals.js */ \"./src/globals.js\");\n/* harmony import */ var _api_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/api.js */ \"./src/components/api/api.js\");\n/* harmony import */ var _modal_modal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modal/modal.js */ \"./src/components/modal/modal.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_globals_js__WEBPACK_IMPORTED_MODULE_0__]);\n_globals_js__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nfunction createCard(cardData, userID, openModal, openImage, likeCard) {\n  const cardTemplate = document.querySelector('#card-template').content;\n  const card = cardTemplate.querySelector('.card').cloneNode(true);\n  const cardNameElement = card.querySelector('.card__title');\n  const cardImgElement = card.querySelector('.card__image');\n  const buttonRemoveElement = card.querySelector('.card__delete-button');\n  const buttonLikeElement = card.querySelector('.card__like-button');\n  const likesCountElement = card.querySelector('.card__like-count');\n  const likesCount = cardData.likes.length;\n\n  // Setting up remove button\n  if (userID === cardData.ownerId) {\n    buttonRemoveElement.classList.add('card__delete-button_visible');\n    buttonRemoveElement.addEventListener('click', () => {\n      _globals_js__WEBPACK_IMPORTED_MODULE_0__.formRemoveCard.dataset.cardId = cardData.cardId;\n      openModal(_globals_js__WEBPACK_IMPORTED_MODULE_0__.popupRemoveCard);\n    });\n  } else {\n    buttonRemoveElement.remove();\n  }\n\n  // Make like button checked\n  if (likesCount > 0) {\n    for (let i = 0; i <= likesCount; i++) {\n      if (cardData.likes[i]?._id === userID) {\n        buttonLikeElement.classList.add('card__like-button_is-active');\n      }\n    }\n  }\n  card.id = 'card_' + cardData.cardId;\n  cardNameElement.textContent = cardData.name;\n  cardImgElement.src = cardData.url;\n  cardImgElement.alt = 'test alt';\n  likesCountElement.textContent = likesCount;\n  cardImgElement.addEventListener('click', () => openImage(cardData, openModal));\n  buttonLikeElement.addEventListener('click', () => {\n    likeCard(buttonLikeElement, cardData.cardId, likesCountElement);\n  });\n  return card;\n}\nfunction removeCardFromDOM(cardId) {\n  document.querySelector('#card_' + cardId).remove();\n}\nfunction likeCard(likeButton, cardId, likesCountElement) {\n  if (likeButton.classList.contains('card__like-button_is-active')) {\n    _api_api_js__WEBPACK_IMPORTED_MODULE_1__.deleteCardLikeRequest(cardId).then(data => {\n      likesCountElement.textContent = data.likes.length;\n      likeButton.classList.remove('card__like-button_is-active');\n    }).catch(err => console.log(err));\n  } else {\n    _api_api_js__WEBPACK_IMPORTED_MODULE_1__.putCardLikeRequest(cardId).then(data => {\n      likesCountElement.textContent = data.likes.length;\n      likeButton.classList.add('card__like-button_is-active');\n    }).catch(err => console.log(err));\n  }\n}\nfunction deleteCard(cardID, form) {\n  const loading = _globals_js__WEBPACK_IMPORTED_MODULE_0__.renderSubmitLoading(true, form); // Changes button text and stores it for later use\n\n  _api_api_js__WEBPACK_IMPORTED_MODULE_1__.deleteCardRequest(cardID).then(() => {\n    removeCardFromDOM(cardID);\n    _modal_modal_js__WEBPACK_IMPORTED_MODULE_2__.closeModal(_globals_js__WEBPACK_IMPORTED_MODULE_0__.popupRemoveCard);\n  }).catch(err => console.log(err)).finally(() => _globals_js__WEBPACK_IMPORTED_MODULE_0__.renderSubmitLoading(false, form, loading));\n}\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });\n\n//# sourceURL=webpack://default_project_html-css-js-webpack/./src/components/cards/cards.js?");

/***/ }),

/***/ "./src/components/modal/modal.js":
/*!***************************************!*\
  !*** ./src/components/modal/modal.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   closeModal: () => (/* binding */ closeModal),\n/* harmony export */   getOpenedPopup: () => (/* binding */ getOpenedPopup),\n/* harmony export */   openModal: () => (/* binding */ openModal)\n/* harmony export */ });\nfunction openModal(popup) {\n  popup.classList.add('popup_is-opened');\n  popup.classList.remove('popup_is-animated');\n  document.addEventListener('keydown', escapeButtonHandler);\n}\nfunction closeModal(popup) {\n  popup.classList.add('popup_is-animated');\n  popup.classList.remove('popup_is-opened');\n  document.removeEventListener('keydown', escapeButtonHandler);\n}\nfunction escapeButtonHandler(evt) {\n  if (typeof evt.key === 'string') {\n    if (evt.key.toLowerCase() === 'escape') {\n      const popup = getOpenedPopup();\n      closeModal(popup);\n    }\n  }\n}\nfunction getOpenedPopup() {\n  return document.querySelector('.popup_is-opened');\n}\n\n//# sourceURL=webpack://default_project_html-css-js-webpack/./src/components/modal/modal.js?");

/***/ }),

/***/ "./src/components/profile/profile.js":
/*!*******************************************!*\
  !*** ./src/components/profile/profile.js ***!
  \*******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   editAvatar: () => (/* binding */ editAvatar),\n/* harmony export */   editProfilePopup: () => (/* binding */ editProfilePopup),\n/* harmony export */   submitProfileEdit: () => (/* binding */ submitProfileEdit)\n/* harmony export */ });\n/* harmony import */ var _globals_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../globals.js */ \"./src/globals.js\");\n/* harmony import */ var _api_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/api.js */ \"./src/components/api/api.js\");\n/* harmony import */ var _modal_modal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modal/modal.js */ \"./src/components/modal/modal.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_globals_js__WEBPACK_IMPORTED_MODULE_0__]);\n_globals_js__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nfunction editProfilePopup() {\n  _globals_js__WEBPACK_IMPORTED_MODULE_0__.popupEditProfile.querySelector('input[name=\"name\"]').value = _globals_js__WEBPACK_IMPORTED_MODULE_0__.formEditProfileName.textContent;\n  _globals_js__WEBPACK_IMPORTED_MODULE_0__.popupEditProfile.querySelector('input[name=\"description\"]').value = _globals_js__WEBPACK_IMPORTED_MODULE_0__.formEditProfileDesc.textContent;\n}\nfunction submitProfileEdit(nameElement, descElement, form) {\n  const name = _globals_js__WEBPACK_IMPORTED_MODULE_0__.formEditProfile.querySelector('input[name=\"name\"]').value;\n  const desc = _globals_js__WEBPACK_IMPORTED_MODULE_0__.formEditProfile.querySelector('input[name=\"description\"]').value;\n  const loading = _globals_js__WEBPACK_IMPORTED_MODULE_0__.renderSubmitLoading(true, form); // Changes button text and stores it for later use\n\n  _api_api_js__WEBPACK_IMPORTED_MODULE_1__.postUserInfoRequest(name, desc).then(data => {\n    nameElement.textContent = data.name;\n    descElement.textContent = data.about;\n    _modal_modal_js__WEBPACK_IMPORTED_MODULE_2__.closeModal(_globals_js__WEBPACK_IMPORTED_MODULE_0__.popupEditProfile);\n  }).catch(err => console.log(err)).finally(() => _globals_js__WEBPACK_IMPORTED_MODULE_0__.renderSubmitLoading(false, form, loading));\n}\nfunction editAvatar(avatarURL, form) {\n  const loading = _globals_js__WEBPACK_IMPORTED_MODULE_0__.renderSubmitLoading(true, form); // Changes button text and stores it for later use\n\n  _api_api_js__WEBPACK_IMPORTED_MODULE_1__.patchAvatarRequest(avatarURL).then(data => {\n    _globals_js__WEBPACK_IMPORTED_MODULE_0__.avatarProfileElement.setAttribute('style', 'background-image: url(' + data.avatar + ');');\n    _modal_modal_js__WEBPACK_IMPORTED_MODULE_2__.closeModal(_globals_js__WEBPACK_IMPORTED_MODULE_0__.popupEditAvatar);\n  }).catch(err => console.log(err)).finally(() => _globals_js__WEBPACK_IMPORTED_MODULE_0__.renderSubmitLoading(false, form, loading));\n}\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });\n\n//# sourceURL=webpack://default_project_html-css-js-webpack/./src/components/profile/profile.js?");

/***/ }),

/***/ "./src/components/validation/validation.js":
/*!*************************************************!*\
  !*** ./src/components/validation/validation.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   clearValidation: () => (/* binding */ clearValidation),\n/* harmony export */   enableValidation: () => (/* binding */ enableValidation),\n/* harmony export */   toggleSubmitButtonState: () => (/* binding */ toggleSubmitButtonState)\n/* harmony export */ });\nfunction enableValidation(validationConfig) {\n  const formList = Array.from(document.querySelectorAll(validationConfig.formSelector));\n  formList.forEach(formElement => {\n    const inputList = Array.from(formElement.querySelectorAll(validationConfig.inputSelector));\n    inputList.forEach(inputElement => setEventHandlers(formElement, inputElement, validationConfig));\n    toggleSubmitButtonState(formElement, validationConfig);\n  });\n}\nfunction clearValidation(formElement, validationConfig) {\n  const inputList = Array.from(formElement.querySelectorAll(validationConfig.inputSelector));\n  const errorList = Array.from(formElement.querySelectorAll(validationConfig.errorClass));\n  errorList.forEach(errElement => {\n    errElement.textContent = '';\n  });\n  inputList.forEach(inputElement => {\n    inputElement.classList.remove(validationConfig.inputErrorClass);\n    inputElement.setCustomValidity(''); // Без этого багует кнопка submit при повторном открытии попапа(в некоторых случаях)\n  });\n  toggleSubmitButtonState(formElement, validationConfig);\n}\nfunction setEventHandlers(formElement, inputElement, validationConfig) {\n  inputElement.addEventListener('input', () => {\n    validateInput(formElement, inputElement, validationConfig);\n  });\n}\nfunction validateInput(formElement, inputElement, validationConfig) {\n  if (inputElement.validity.patternMismatch) {\n    inputElement.setCustomValidity(inputElement.dataset.errorMessage);\n  } else {\n    inputElement.setCustomValidity('');\n  }\n  if (!inputElement.validity.valid) {\n    showValidationError(formElement, inputElement, inputElement.validationMessage, validationConfig);\n  } else {\n    hideValidationError(formElement, inputElement, validationConfig);\n  }\n  toggleSubmitButtonState(formElement, validationConfig);\n}\nfunction showValidationError(formElement, inputElement, validationMessage, validationConfig) {\n  const errorElement = formElement.querySelector('#' + inputElement.dataset.id + '_error');\n  inputElement.classList.add(validationConfig.inputErrorClass);\n  errorElement.textContent = validationMessage;\n}\nfunction hideValidationError(formElement, inputElement, validationConfig) {\n  const errorElement = formElement.querySelector('#' + inputElement.dataset.id + '_error');\n  inputElement.classList.remove(validationConfig.inputErrorClass);\n  errorElement.textContent = '';\n}\nfunction toggleSubmitButtonState(formElement, validationConfig) {\n  const buttonElement = formElement.querySelector(validationConfig.submitButtonSelector);\n  if (hasInvalidInput(formElement, validationConfig)) {\n    buttonElement.classList.add(validationConfig.inactiveButtonClass);\n    buttonElement.disabled = true;\n  } else {\n    buttonElement.classList.remove(validationConfig.inactiveButtonClass);\n    buttonElement.disabled = false;\n  }\n}\nfunction hasInvalidInput(formElement, validationConfig) {\n  const inputList = Array.from(formElement.querySelectorAll(validationConfig.inputSelector));\n  return inputList.some(inputElement => {\n    return !inputElement.validity.valid;\n  });\n}\n\n//# sourceURL=webpack://default_project_html-css-js-webpack/./src/components/validation/validation.js?");

/***/ }),

/***/ "./src/globals.js":
/*!************************!*\
  !*** ./src/globals.js ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addCard: () => (/* binding */ addCard),\n/* harmony export */   avatarProfileElement: () => (/* binding */ avatarProfileElement),\n/* harmony export */   buttonAddCard: () => (/* binding */ buttonAddCard),\n/* harmony export */   buttonEditAvatar: () => (/* binding */ buttonEditAvatar),\n/* harmony export */   buttonEditProfile: () => (/* binding */ buttonEditProfile),\n/* harmony export */   cardsContainer: () => (/* binding */ cardsContainer),\n/* harmony export */   formAddCard: () => (/* binding */ formAddCard),\n/* harmony export */   formEditAvatar: () => (/* binding */ formEditAvatar),\n/* harmony export */   formEditProfile: () => (/* binding */ formEditProfile),\n/* harmony export */   formEditProfileDesc: () => (/* binding */ formEditProfileDesc),\n/* harmony export */   formEditProfileName: () => (/* binding */ formEditProfileName),\n/* harmony export */   formRemoveCard: () => (/* binding */ formRemoveCard),\n/* harmony export */   inputAddCardName: () => (/* binding */ inputAddCardName),\n/* harmony export */   inputAddCardUrl: () => (/* binding */ inputAddCardUrl),\n/* harmony export */   inputAvatarURL: () => (/* binding */ inputAvatarURL),\n/* harmony export */   inputList: () => (/* binding */ inputList),\n/* harmony export */   openImage: () => (/* binding */ openImage),\n/* harmony export */   popupAddCard: () => (/* binding */ popupAddCard),\n/* harmony export */   popupCloseButtons: () => (/* binding */ popupCloseButtons),\n/* harmony export */   popupEditAvatar: () => (/* binding */ popupEditAvatar),\n/* harmony export */   popupEditProfile: () => (/* binding */ popupEditProfile),\n/* harmony export */   popupImageCaption: () => (/* binding */ popupImageCaption),\n/* harmony export */   popupImageElem: () => (/* binding */ popupImageElem),\n/* harmony export */   popupOpenImage: () => (/* binding */ popupOpenImage),\n/* harmony export */   popupRemoveCard: () => (/* binding */ popupRemoveCard),\n/* harmony export */   popups: () => (/* binding */ popups),\n/* harmony export */   renderAllCards: () => (/* binding */ renderAllCards),\n/* harmony export */   renderProfileInfo: () => (/* binding */ renderProfileInfo),\n/* harmony export */   renderSubmitLoading: () => (/* binding */ renderSubmitLoading),\n/* harmony export */   userID: () => (/* binding */ userID),\n/* harmony export */   validationConfig: () => (/* binding */ validationConfig)\n/* harmony export */ });\n/* harmony import */ var _components_api_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/api/api.js */ \"./src/components/api/api.js\");\n/* harmony import */ var _components_cards_cards_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/cards/cards.js */ \"./src/components/cards/cards.js\");\n/* harmony import */ var _components_modal_modal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/modal/modal.js */ \"./src/components/modal/modal.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_cards_cards_js__WEBPACK_IMPORTED_MODULE_1__]);\n_components_cards_cards_js__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nconst validationConfig = {\n  formSelector: '.popup__form',\n  inputSelector: '.popup__input',\n  submitButtonSelector: '.popup__button',\n  inactiveButtonClass: 'popup__button_disabled',\n  inputErrorClass: '.popup__input_type_error',\n  errorClass: '.popup__error'\n};\nconst userID = await _components_api_api_js__WEBPACK_IMPORTED_MODULE_0__.getUserInfoRequset().then(data => data._id).catch(err => console.log(err));\nconst cardsContainer = document.querySelector('.places__list');\nconst popups = document.querySelectorAll('.popup');\nconst inputList = document.querySelectorAll('input');\nconst popupCloseButtons = document.querySelectorAll('.js_popup-close');\nconst popupEditProfile = document.querySelector('#popup_edit-profile');\nconst buttonEditProfile = document.querySelector('.profile__edit-button');\nconst formEditProfile = document.querySelector('form[name=\"edit-profile\"]');\nconst formEditProfileName = document.querySelector('.profile__title');\nconst formEditProfileDesc = document.querySelector('.profile__description');\nconst popupRemoveCard = document.querySelector('#popup_remove-card');\nconst formRemoveCard = document.querySelector('form[name=\"remove-card\"]');\nconst popupAddCard = document.querySelector('#popup_add-place');\nconst buttonAddCard = document.querySelector('.js_button-card-add');\nconst formAddCard = document.querySelector('form[name=\"new-place\"]');\nconst inputAddCardName = formAddCard.querySelector('input[name=\"place-name\"]');\nconst inputAddCardUrl = formAddCard.querySelector('input[name=\"link\"]');\nconst popupOpenImage = document.querySelector('#popup_open-image');\nconst popupImageElem = popupOpenImage.querySelector('.js_popup-image');\nconst popupImageCaption = popupOpenImage.querySelector('.js_popup-caption');\nconst popupEditAvatar = document.querySelector('#popup_edit-avatar');\nconst formEditAvatar = document.querySelector('form[name=\"edit-avatar\"]');\nconst inputAvatarURL = formEditAvatar.querySelector('.js_input-avatar-url');\nconst buttonEditAvatar = document.querySelector('.js_button-avatar-edit');\nconst avatarProfileElement = document.querySelector('.js_profile-image');\nfunction addCard(form) {\n  const cardData = {};\n  const loading = renderSubmitLoading(true, form); // Changes button text and stores it for later use\n\n  _components_api_api_js__WEBPACK_IMPORTED_MODULE_0__.postNewCardRequest(inputAddCardName.value, inputAddCardUrl.value).then(card => {\n    cardData.cardId = card._id;\n    cardData.ownerId = card.owner._id;\n    cardData.name = card.name;\n    cardData.url = card.link;\n    cardData.likes = card.likes;\n    cardsContainer.prepend(_components_cards_cards_js__WEBPACK_IMPORTED_MODULE_1__.createCard(cardData, userID, _components_modal_modal_js__WEBPACK_IMPORTED_MODULE_2__.openModal, openImage));\n    _components_modal_modal_js__WEBPACK_IMPORTED_MODULE_2__.closeModal(popupAddCard);\n  }).catch(err => console.log(err)).finally(() => renderSubmitLoading(false, form, loading));\n}\nfunction openImage(cardData, openModal) {\n  popupImageElem.src = cardData.url;\n  popupImageElem.alt = 'test alt';\n  popupImageCaption.textContent = cardData.name;\n  openModal(popupOpenImage);\n}\nfunction renderSubmitLoading(isLoading, form, prevText) {\n  const button = form.querySelector('button[type=\"submit\"]');\n  if (isLoading) {\n    prevText = button.textContent;\n    button.textContent = 'Сохранение...';\n    return prevText;\n  } else {\n    button.textContent = prevText;\n  }\n}\nfunction renderProfileInfo() {\n  _components_api_api_js__WEBPACK_IMPORTED_MODULE_0__.getUserInfoRequset().then(data => {\n    formEditProfileName.textContent = data.name;\n    formEditProfileDesc.textContent = data.about;\n    avatarProfileElement.setAttribute('style', 'background-image: url(' + data.avatar + ');');\n  }).catch(err => console.log(err));\n}\nfunction renderAllCards() {\n  _components_api_api_js__WEBPACK_IMPORTED_MODULE_0__.getInitialCardsRequest().then(cards => {\n    cards.forEach(function (card) {\n      cardsContainer.append(_components_cards_cards_js__WEBPACK_IMPORTED_MODULE_1__.createCard({\n        cardId: card._id,\n        ownerId: card.owner._id,\n        name: card.name,\n        url: card.link,\n        likes: card.likes\n      }, userID, _components_modal_modal_js__WEBPACK_IMPORTED_MODULE_2__.openModal, openImage, _components_cards_cards_js__WEBPACK_IMPORTED_MODULE_1__.likeCard));\n    });\n  }).catch(err => console.log(err));\n}\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } }, 1);\n\n//# sourceURL=webpack://default_project_html-css-js-webpack/./src/globals.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ \"./src/index.css\");\n/* harmony import */ var _globals_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./globals.js */ \"./src/globals.js\");\n/* harmony import */ var _components_cards_cards_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/cards/cards.js */ \"./src/components/cards/cards.js\");\n/* harmony import */ var _components_modal_modal_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/modal/modal.js */ \"./src/components/modal/modal.js\");\n/* harmony import */ var _components_profile_profile_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/profile/profile.js */ \"./src/components/profile/profile.js\");\n/* harmony import */ var _components_validation_validation_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/validation/validation.js */ \"./src/components/validation/validation.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_globals_js__WEBPACK_IMPORTED_MODULE_1__, _components_cards_cards_js__WEBPACK_IMPORTED_MODULE_2__, _components_profile_profile_js__WEBPACK_IMPORTED_MODULE_4__]);\n([_globals_js__WEBPACK_IMPORTED_MODULE_1__, _components_cards_cards_js__WEBPACK_IMPORTED_MODULE_2__, _components_profile_profile_js__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\n_globals_js__WEBPACK_IMPORTED_MODULE_1__.renderProfileInfo();\n_globals_js__WEBPACK_IMPORTED_MODULE_1__.renderAllCards();\n_components_validation_validation_js__WEBPACK_IMPORTED_MODULE_5__.enableValidation(_globals_js__WEBPACK_IMPORTED_MODULE_1__.validationConfig);\n\n////////////////////////////////////////\n/////////// EVENT LISTENERS ///////////\n//////////////////////////////////////\n\n_globals_js__WEBPACK_IMPORTED_MODULE_1__.buttonEditProfile.addEventListener('click', () => {\n  _components_profile_profile_js__WEBPACK_IMPORTED_MODULE_4__.editProfilePopup();\n  _components_validation_validation_js__WEBPACK_IMPORTED_MODULE_5__.clearValidation(_globals_js__WEBPACK_IMPORTED_MODULE_1__.formEditProfile, _globals_js__WEBPACK_IMPORTED_MODULE_1__.validationConfig);\n  _components_modal_modal_js__WEBPACK_IMPORTED_MODULE_3__.openModal(_globals_js__WEBPACK_IMPORTED_MODULE_1__.popupEditProfile);\n});\n_globals_js__WEBPACK_IMPORTED_MODULE_1__.buttonAddCard.addEventListener('click', () => {\n  _components_modal_modal_js__WEBPACK_IMPORTED_MODULE_3__.openModal(_globals_js__WEBPACK_IMPORTED_MODULE_1__.popupAddCard);\n});\n_globals_js__WEBPACK_IMPORTED_MODULE_1__.buttonEditAvatar.addEventListener('click', () => {\n  _components_modal_modal_js__WEBPACK_IMPORTED_MODULE_3__.openModal(_globals_js__WEBPACK_IMPORTED_MODULE_1__.popupEditAvatar);\n});\n_globals_js__WEBPACK_IMPORTED_MODULE_1__.formEditProfile.addEventListener('submit', evt => {\n  evt.preventDefault();\n  _components_profile_profile_js__WEBPACK_IMPORTED_MODULE_4__.submitProfileEdit(_globals_js__WEBPACK_IMPORTED_MODULE_1__.formEditProfileName, _globals_js__WEBPACK_IMPORTED_MODULE_1__.formEditProfileDesc, _globals_js__WEBPACK_IMPORTED_MODULE_1__.formEditProfile);\n});\n_globals_js__WEBPACK_IMPORTED_MODULE_1__.formAddCard.addEventListener('submit', evt => {\n  evt.preventDefault();\n  _globals_js__WEBPACK_IMPORTED_MODULE_1__.addCard(_globals_js__WEBPACK_IMPORTED_MODULE_1__.formAddCard);\n  _globals_js__WEBPACK_IMPORTED_MODULE_1__.formAddCard.reset();\n  _components_validation_validation_js__WEBPACK_IMPORTED_MODULE_5__.toggleSubmitButtonState(_globals_js__WEBPACK_IMPORTED_MODULE_1__.formAddCard, _globals_js__WEBPACK_IMPORTED_MODULE_1__.validationConfig);\n});\n_globals_js__WEBPACK_IMPORTED_MODULE_1__.formEditAvatar.addEventListener('submit', evt => {\n  evt.preventDefault();\n  const avatarURL = _globals_js__WEBPACK_IMPORTED_MODULE_1__.inputAvatarURL.value;\n  _components_profile_profile_js__WEBPACK_IMPORTED_MODULE_4__.editAvatar(avatarURL, _globals_js__WEBPACK_IMPORTED_MODULE_1__.formEditAvatar);\n});\n_globals_js__WEBPACK_IMPORTED_MODULE_1__.formRemoveCard.addEventListener('submit', evt => {\n  evt.preventDefault();\n  const cardID = _globals_js__WEBPACK_IMPORTED_MODULE_1__.formRemoveCard.dataset.cardId;\n  _components_cards_cards_js__WEBPACK_IMPORTED_MODULE_2__.deleteCard(cardID, _globals_js__WEBPACK_IMPORTED_MODULE_1__.formRemoveCard);\n});\n_globals_js__WEBPACK_IMPORTED_MODULE_1__.popupCloseButtons.forEach(function (item) {\n  item.addEventListener('click', () => {\n    const popup = _components_modal_modal_js__WEBPACK_IMPORTED_MODULE_3__.getOpenedPopup();\n    _components_modal_modal_js__WEBPACK_IMPORTED_MODULE_3__.closeModal(popup);\n  });\n});\n\n// Closing popup on overlay click\n_globals_js__WEBPACK_IMPORTED_MODULE_1__.popups.forEach(function (item) {\n  item.addEventListener('mousedown', evt => {\n    const popup = _components_modal_modal_js__WEBPACK_IMPORTED_MODULE_3__.getOpenedPopup();\n    if (evt.target === popup) {\n      _components_modal_modal_js__WEBPACK_IMPORTED_MODULE_3__.closeModal(popup);\n    }\n  });\n});\n_globals_js__WEBPACK_IMPORTED_MODULE_1__.inputList.forEach(function (input) {\n  input.addEventListener('focus', () => {\n    input.select();\n  });\n});\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });\n\n//# sourceURL=webpack://default_project_html-css-js-webpack/./src/index.js?");

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://default_project_html-css-js-webpack/./src/index.css?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/async module */
/******/ 	(() => {
/******/ 		var webpackQueues = typeof Symbol === "function" ? Symbol("webpack queues") : "__webpack_queues__";
/******/ 		var webpackExports = typeof Symbol === "function" ? Symbol("webpack exports") : "__webpack_exports__";
/******/ 		var webpackError = typeof Symbol === "function" ? Symbol("webpack error") : "__webpack_error__";
/******/ 		var resolveQueue = (queue) => {
/******/ 			if(queue && queue.d < 1) {
/******/ 				queue.d = 1;
/******/ 				queue.forEach((fn) => (fn.r--));
/******/ 				queue.forEach((fn) => (fn.r-- ? fn.r++ : fn()));
/******/ 			}
/******/ 		}
/******/ 		var wrapDeps = (deps) => (deps.map((dep) => {
/******/ 			if(dep !== null && typeof dep === "object") {
/******/ 				if(dep[webpackQueues]) return dep;
/******/ 				if(dep.then) {
/******/ 					var queue = [];
/******/ 					queue.d = 0;
/******/ 					dep.then((r) => {
/******/ 						obj[webpackExports] = r;
/******/ 						resolveQueue(queue);
/******/ 					}, (e) => {
/******/ 						obj[webpackError] = e;
/******/ 						resolveQueue(queue);
/******/ 					});
/******/ 					var obj = {};
/******/ 					obj[webpackQueues] = (fn) => (fn(queue));
/******/ 					return obj;
/******/ 				}
/******/ 			}
/******/ 			var ret = {};
/******/ 			ret[webpackQueues] = x => {};
/******/ 			ret[webpackExports] = dep;
/******/ 			return ret;
/******/ 		}));
/******/ 		__webpack_require__.a = (module, body, hasAwait) => {
/******/ 			var queue;
/******/ 			hasAwait && ((queue = []).d = -1);
/******/ 			var depQueues = new Set();
/******/ 			var exports = module.exports;
/******/ 			var currentDeps;
/******/ 			var outerResolve;
/******/ 			var reject;
/******/ 			var promise = new Promise((resolve, rej) => {
/******/ 				reject = rej;
/******/ 				outerResolve = resolve;
/******/ 			});
/******/ 			promise[webpackExports] = exports;
/******/ 			promise[webpackQueues] = (fn) => (queue && fn(queue), depQueues.forEach(fn), promise["catch"](x => {}));
/******/ 			module.exports = promise;
/******/ 			body((deps) => {
/******/ 				currentDeps = wrapDeps(deps);
/******/ 				var fn;
/******/ 				var getResult = () => (currentDeps.map((d) => {
/******/ 					if(d[webpackError]) throw d[webpackError];
/******/ 					return d[webpackExports];
/******/ 				}))
/******/ 				var promise = new Promise((resolve) => {
/******/ 					fn = () => (resolve(getResult));
/******/ 					fn.r = 0;
/******/ 					var fnQueue = (q) => (q !== queue && !depQueues.has(q) && (depQueues.add(q), q && !q.d && (fn.r++, q.push(fn))));
/******/ 					currentDeps.map((dep) => (dep[webpackQueues](fnQueue)));
/******/ 				});
/******/ 				return fn.r ? promise : getResult();
/******/ 			}, (err) => ((err ? reject(promise[webpackError] = err) : outerResolve(exports)), resolveQueue(queue)));
/******/ 			queue && queue.d < 0 && (queue.d = 0);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;