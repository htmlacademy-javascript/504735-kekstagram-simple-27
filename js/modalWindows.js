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
const onPopupSuccessClose = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    modalCloseSuccess();
  }
};

//Функция закрытия окна по клику на произвольную область
const onClickEmptyAreaSucces = (evt) => {
  if(evt.target.matches('.success')) {
    modalCloseSuccess();
  }
};

//Функция открытия модального окна при успешной загрузке
function modalOpenSuccess() {
  bodyElement.appendChild(successModalElement);
  document.addEventListener('click', onClickEmptyAreaSucces);
  document.addEventListener('keydown', onPopupSuccessClose);
  succesCloseButton.addEventListener('click', modalCloseSuccess);
}

// Функция закрытия модального окна успешной загрузки
function modalCloseSuccess() {
  successModalElement.remove();
  document.removeEventListener('keydown', onPopupSuccessClose);
}

//Функция закрытия окна по клику на произвольную область
const onClickEmptyAreaError = (evt) => {
  if(evt.target.matches('.error')) {
    modalCloseError();
  }
};

//Функция закрытия модального окна при ошибке загрузки
const onPopupErrorClose = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    modalCloseError();
  }
};

//Функция открытия модального окна при ошибке при загрузки
function modalOpenError() {
  bodyElement.appendChild(errorModalElement);
  bodyElement.classList.add('modal-open');
  document.addEventListener('click', onClickEmptyAreaError);
  document.addEventListener('keydown', onPopupErrorClose);
  errorCloseButton.addEventListener('click', modalCloseError);
}

//Функция закрытия модального окна при ошибке при загрузки
function modalCloseError() {
  errorModalElement.remove();
  document.removeEventListener('keydown', onPopupErrorClose);
}

export {modalOpenSuccess, modalOpenError, showAlert};
