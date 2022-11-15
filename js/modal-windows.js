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
const onEscClickClosePopupSuccess = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeModalSuccess();
  }
};

//Функция закрытия окна по клику на произвольную область
const onEmptyAreaClickSucces = (evt) => {
  if(evt.target.matches('.success')) {
    closeModalSuccess();
  }
};

//Функция открытия модального окна при успешной загрузке
const openModalSuccess = () => {
  bodyElement.appendChild(successModalElement);
  document.addEventListener('click', onEmptyAreaClickSucces);
  document.addEventListener('keydown', onEscClickClosePopupSuccess);
  succesCloseButton.addEventListener('click', closeModalSuccess);
};

// Функция закрытия модального окна успешной загрузки
function closeModalSuccess() {
  successModalElement.remove();
  document.removeEventListener('keydown', onEscClickClosePopupSuccess);
}

//Функция закрытия окна по клику на произвольную область
const onEmptyAreaClickError = (evt) => {
  if(evt.target.matches('.error')) {
    closeModalError();
  }
};

//Функция закрытия модального окна при ошибке загрузки
const onEscClickClosePopupError = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeModalError();
  }
};

//Функция открытия модального окна при ошибке при загрузки
const openModalError = () => {
  bodyElement.appendChild(errorModalElement);
  bodyElement.classList.add('modal-open');
  document.addEventListener('click', onEmptyAreaClickError);
  document.addEventListener('keydown', onEscClickClosePopupError);
  errorCloseButton.addEventListener('click', closeModalError);
};

//Функция закрытия модального окна при ошибке при загрузки
function closeModalError() {
  errorModalElement.remove();
  document.removeEventListener('keydown', onEscClickClosePopupError);
}

export {openModalSuccess, openModalError, showAlert};
