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

/***/ "./src/components/cards/cards.js":
/*!***************************************!*\
  !*** ./src/components/cards/cards.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initialCards: () => (/* binding */ initialCards),\n/* harmony export */   likeCard: () => (/* binding */ likeCard),\n/* harmony export */   removeCard: () => (/* binding */ removeCard),\n/* harmony export */   renderCard: () => (/* binding */ renderCard)\n/* harmony export */ });\n/* harmony import */ var _cardsData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cardsData.js */ \"./src/components/cards/cardsData.js\");\n\nconst initialCards = [{\n  name: \"Архыз\",\n  src: _cardsData_js__WEBPACK_IMPORTED_MODULE_0__.cardImg1,\n  alt: 'Test img alt 1'\n}, {\n  name: \"Челябинская область\",\n  src: _cardsData_js__WEBPACK_IMPORTED_MODULE_0__.cardImg2,\n  alt: 'Test img alt 2'\n}, {\n  name: \"Иваново\",\n  src: _cardsData_js__WEBPACK_IMPORTED_MODULE_0__.cardImg3,\n  alt: 'Test img alt 3'\n}, {\n  name: \"Камчатка\",\n  src: _cardsData_js__WEBPACK_IMPORTED_MODULE_0__.cardImg4,\n  alt: 'Test img alt 4'\n}, {\n  name: \"Холмогорский район\",\n  src: _cardsData_js__WEBPACK_IMPORTED_MODULE_0__.cardImg5,\n  alt: 'Test img alt 5'\n}, {\n  name: \"Байкал\",\n  src: _cardsData_js__WEBPACK_IMPORTED_MODULE_0__.cardImg6,\n  alt: 'Test img alt 6'\n}];\nfunction renderCard(cardData, removeCard, openModal, openImage, likeCard) {\n  const cardTemplate = document.querySelector('#card-template').content;\n  const card = cardTemplate.querySelector('.card').cloneNode(true);\n  const cardName = card.querySelector('.card__title');\n  const cardImg = card.querySelector('.card__image');\n  const buttonRemove = card.querySelector('.card__delete-button');\n  const buttonLike = card.querySelector('.card__like-button');\n  cardName.textContent = cardData.name;\n  cardImg.src = cardData.src;\n  cardImg.alt = cardData.alt;\n  cardImg.addEventListener('click', () => openImage(cardData, openModal));\n  buttonRemove.addEventListener('click', removeCard);\n  buttonLike.addEventListener('click', likeCard);\n  return card;\n}\nfunction removeCard(event) {\n  event.target.closest('.card').remove();\n}\nfunction likeCard(evt) {\n  evt.target.classList.toggle('card__like-button_is-active');\n}\n\n//# sourceURL=webpack://default_project_html-css-js-webpack/./src/components/cards/cards.js?");

/***/ }),

/***/ "./src/components/cards/cardsData.js":
/*!*******************************************!*\
  !*** ./src/components/cards/cardsData.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   cardImg1: () => (/* binding */ cardImg1),\n/* harmony export */   cardImg2: () => (/* binding */ cardImg2),\n/* harmony export */   cardImg3: () => (/* binding */ cardImg3),\n/* harmony export */   cardImg4: () => (/* binding */ cardImg4),\n/* harmony export */   cardImg5: () => (/* binding */ cardImg5),\n/* harmony export */   cardImg6: () => (/* binding */ cardImg6)\n/* harmony export */ });\nconst cardImg1 = new URL(/* asset import */ __webpack_require__(/*! https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg */ \"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg\"), __webpack_require__.b);\nconst cardImg2 = new URL(/* asset import */ __webpack_require__(/*! https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg */ \"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg\"), __webpack_require__.b);\nconst cardImg3 = new URL(/* asset import */ __webpack_require__(/*! https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg */ \"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg\"), __webpack_require__.b);\nconst cardImg4 = new URL(/* asset import */ __webpack_require__(/*! https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg */ \"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg\"), __webpack_require__.b);\nconst cardImg5 = new URL(/* asset import */ __webpack_require__(/*! https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg */ \"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg\"), __webpack_require__.b);\nconst cardImg6 = new URL(/* asset import */ __webpack_require__(/*! https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg */ \"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg\"), __webpack_require__.b);\n\n//# sourceURL=webpack://default_project_html-css-js-webpack/./src/components/cards/cardsData.js?");

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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   editProfilePopup: () => (/* binding */ editProfilePopup),\n/* harmony export */   submitProfileEdit: () => (/* binding */ submitProfileEdit)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../index.js */ \"./src/index.js\");\n\nfunction editProfilePopup() {\n  _index_js__WEBPACK_IMPORTED_MODULE_0__.popupEditProfile.querySelector('input[name=\"name\"]').value = _index_js__WEBPACK_IMPORTED_MODULE_0__.formEditProfileName.textContent;\n  _index_js__WEBPACK_IMPORTED_MODULE_0__.popupEditProfile.querySelector('input[name=\"description\"]').value = _index_js__WEBPACK_IMPORTED_MODULE_0__.formEditProfileDesc.textContent;\n}\nfunction submitProfileEdit() {\n  const name = _index_js__WEBPACK_IMPORTED_MODULE_0__.formEditProfile.querySelector('input[name=\"name\"]').value;\n  const desc = _index_js__WEBPACK_IMPORTED_MODULE_0__.formEditProfile.querySelector('input[name=\"description\"]').value;\n  document.querySelector('.profile__title').textContent = name;\n  document.querySelector('.profile__description').textContent = desc;\n}\n\n//# sourceURL=webpack://default_project_html-css-js-webpack/./src/components/profile/profile.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addCard: () => (/* binding */ addCard),\n/* harmony export */   container: () => (/* binding */ container),\n/* harmony export */   formEditProfile: () => (/* binding */ formEditProfile),\n/* harmony export */   formEditProfileDesc: () => (/* binding */ formEditProfileDesc),\n/* harmony export */   formEditProfileName: () => (/* binding */ formEditProfileName),\n/* harmony export */   openImage: () => (/* binding */ openImage),\n/* harmony export */   popupEditProfile: () => (/* binding */ popupEditProfile)\n/* harmony export */ });\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ \"./src/index.css\");\n/* harmony import */ var _components_cards_cards_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/cards/cards.js */ \"./src/components/cards/cards.js\");\n/* harmony import */ var _components_modal_modal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/modal/modal.js */ \"./src/components/modal/modal.js\");\n/* harmony import */ var _components_profile_profile_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/profile/profile.js */ \"./src/components/profile/profile.js\");\n\n\n\n\n\n// Main container for cards\nconst container = document.querySelector('.places__list');\n\n// Gathering elements in arrays\nconst popups = document.querySelectorAll('.popup');\nconst inputs = document.querySelectorAll('input');\nconst popupCloseButtons = document.querySelectorAll('.js_popup-close');\n\n// Profile editing popup\nconst popupEditProfile = document.querySelector('#popup_edit-profile');\nconst buttonEditProfile = document.querySelector('.profile__edit-button');\n\n// Profile editing form\nconst formEditProfile = document.querySelector('[name=\"edit-profile\"]');\nconst formEditProfileName = document.querySelector('.profile__title');\nconst formEditProfileDesc = document.querySelector('.profile__description');\n\n// Card adding popup\nconst popupAddCard = document.querySelector('#popup_add-place');\nconst popupAddCardButton = document.querySelector('.profile__add-button');\n\n// Card adding form\nconst formAddCard = document.querySelector('[name=\"new-place\"]');\nconst inputAddCardName = formAddCard.querySelector('input[name=\"place-name\"]');\nconst inputAddCardSrc = formAddCard.querySelector('input[name=\"link\"]');\n\n// Open image popup\nconst popupOpenImage = document.querySelector('#popup_open-image');\nconst popupImageElem = popupOpenImage.querySelector('.popup__image');\nconst popupImageCaption = popupOpenImage.querySelector('.popup__caption');\nfunction addCard() {\n  const cardData = {};\n  cardData.name = inputAddCardName.value;\n  cardData.src = inputAddCardSrc.value;\n  container.prepend((0,_components_cards_cards_js__WEBPACK_IMPORTED_MODULE_1__.renderCard)(cardData, _components_cards_cards_js__WEBPACK_IMPORTED_MODULE_1__.removeCard, _components_modal_modal_js__WEBPACK_IMPORTED_MODULE_2__.openModal, openImage));\n}\n\n// Dropping cards on page load\n_components_cards_cards_js__WEBPACK_IMPORTED_MODULE_1__.initialCards.forEach(function (item) {\n  container.append((0,_components_cards_cards_js__WEBPACK_IMPORTED_MODULE_1__.renderCard)(item, _components_cards_cards_js__WEBPACK_IMPORTED_MODULE_1__.removeCard, _components_modal_modal_js__WEBPACK_IMPORTED_MODULE_2__.openModal, openImage, _components_cards_cards_js__WEBPACK_IMPORTED_MODULE_1__.likeCard));\n});\nfunction openImage(cardData, openModal) {\n  popupImageElem.src = cardData.src;\n  popupImageElem.alt = cardData.alt;\n  popupImageCaption.textContent = cardData.name;\n  openModal(popupOpenImage);\n}\n\n////////////////////////////////////////\n/////////// EVENT LISTENERS ///////////\n//////////////////////////////////////\n\nbuttonEditProfile.addEventListener('click', () => {\n  (0,_components_profile_profile_js__WEBPACK_IMPORTED_MODULE_3__.editProfilePopup)();\n  (0,_components_modal_modal_js__WEBPACK_IMPORTED_MODULE_2__.openModal)(popupEditProfile);\n});\npopupAddCardButton.addEventListener('click', () => (0,_components_modal_modal_js__WEBPACK_IMPORTED_MODULE_2__.openModal)(popupAddCard));\n\n// Editing profile on submit\nformEditProfile.addEventListener('submit', evt => {\n  evt.preventDefault();\n  (0,_components_profile_profile_js__WEBPACK_IMPORTED_MODULE_3__.submitProfileEdit)(evt);\n  (0,_components_modal_modal_js__WEBPACK_IMPORTED_MODULE_2__.closeModal)(popupEditProfile);\n});\n\n// Adding a card on submit\nformAddCard.addEventListener('submit', evt => {\n  evt.preventDefault();\n  addCard(evt);\n  evt.target.reset();\n  (0,_components_modal_modal_js__WEBPACK_IMPORTED_MODULE_2__.closeModal)(popupAddCard);\n});\n\n// Closing popup using button\npopupCloseButtons.forEach(function (item) {\n  item.addEventListener('click', () => {\n    const popup = (0,_components_modal_modal_js__WEBPACK_IMPORTED_MODULE_2__.getOpenedPopup)();\n    (0,_components_modal_modal_js__WEBPACK_IMPORTED_MODULE_2__.closeModal)(popup);\n  });\n});\n\n// Closing popup on overlay click\npopups.forEach(function (item) {\n  item.addEventListener('click', evt => {\n    const popup = (0,_components_modal_modal_js__WEBPACK_IMPORTED_MODULE_2__.getOpenedPopup)();\n    if (evt.target === popup) {\n      (0,_components_modal_modal_js__WEBPACK_IMPORTED_MODULE_2__.closeModal)(popup);\n    }\n  });\n});\n\n// Select input's value on focus\ninputs.forEach(function (item) {\n  item.addEventListener('focus', evt => {\n    evt.target.select();\n  });\n});\n\n//# sourceURL=webpack://default_project_html-css-js-webpack/./src/index.js?");

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://default_project_html-css-js-webpack/./src/index.css?");

/***/ }),

/***/ "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg":
/*!************************************************************************************************!*\
  !*** external "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg" ***!
  \************************************************************************************************/
/***/ ((module) => {

module.exports = "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg";

/***/ }),

/***/ "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg":
/*!************************************************************************************************!*\
  !*** external "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg" ***!
  \************************************************************************************************/
/***/ ((module) => {

module.exports = "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg";

/***/ }),

/***/ "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg":
/*!************************************************************************************************************!*\
  !*** external "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg" ***!
  \************************************************************************************************************/
/***/ ((module) => {

module.exports = "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg";

/***/ }),

/***/ "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg":
/*!*************************************************************************************************!*\
  !*** external "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg" ***!
  \*************************************************************************************************/
/***/ ((module) => {

module.exports = "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg";

/***/ }),

/***/ "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg":
/*!***************************************************************************************************!*\
  !*** external "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg" ***!
  \***************************************************************************************************/
/***/ ((module) => {

module.exports = "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg";

/***/ }),

/***/ "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg":
/*!************************************************************************************************************!*\
  !*** external "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg" ***!
  \************************************************************************************************************/
/***/ ((module) => {

module.exports = "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;