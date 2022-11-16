import {isEscapeKey} from './utils.js';

const ALERT_SHOW_TIME = 5000;

const successModalTemplate = document.querySelector('#success')
  .content
  .querySelector('.success');
const successModalElement = successModalTemplate.cloneNode(true);
const bodyElement = document.querySelector('body');
const succesCloseButton = successModalElement.querySelector('.success__button');
const errorModalTemplate = document.querySelector('#error')
  .content
  .querySelector('.error');
const errorModalElement = errorModalTemplate.cloneNode(true);
const errorCloseButton = errorModalElement.querySelector('.error__button');
const errorUploadTemplate = document.querySelector('#error-upload')
  .content
  .querySelector('.error-upload');

const showAlert = () => {
  const errorUploadElement = errorUploadTemplate.cloneNode(true);
  document.body.append(errorUploadElement);
  setTimeout(() => {
    errorUploadElement.remove();
  }, ALERT_SHOW_TIME);
};

//Функция закрытия сообщения о успешной отправке по ESC
const onEscClosePopupSuccessClick = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeSuccessModal();
  }
};

//Функция закрытия окна по клику на произвольную область
const onEmptyAreaSuccesClick = (evt) => {
  if(evt.target.matches('.success')) {
    closeSuccessModal();
  }
};

//Функция открытия модального окна при успешной загрузке
const openSuccessModal = () => {
  bodyElement.appendChild(successModalElement);
  document.addEventListener('click', onEmptyAreaSuccesClick);
  document.addEventListener('keydown', onEscClosePopupSuccessClick);
  succesCloseButton.addEventListener('click', closeSuccessModal);
};

// Функция закрытия модального окна успешной загрузки
function closeSuccessModal() {
  successModalElement.remove();
  document.removeEventListener('keydown', onEscClosePopupSuccessClick);
}

//Функция закрытия окна по клику на произвольную область
const onEmptyAreaErrorClick = (evt) => {
  if(evt.target.matches('.error')) {
    closeErrorModal();
  }
};

//Функция закрытия модального окна при ошибке загрузки
const onEscClickClosePopupError = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeErrorModal();
  }
};

//Функция открытия модального окна при ошибке при загрузки
const openErrorModal = () => {
  bodyElement.appendChild(errorModalElement);
  bodyElement.classList.add('modal-open');
  document.addEventListener('click', onEmptyAreaErrorClick);
  document.addEventListener('keydown', onEscClickClosePopupError);
  errorCloseButton.addEventListener('click', closeErrorModal);
};

//Функция закрытия модального окна при ошибке при загрузки
function closeErrorModal() {
  errorModalElement.remove();
  document.removeEventListener('keydown', onEscClickClosePopupError);
}

export {openSuccessModal, openErrorModal, showAlert};
