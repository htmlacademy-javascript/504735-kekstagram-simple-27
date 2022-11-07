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

const isEscapeKey = (evt) => evt.key === 'Escape';

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = '100';
  alertContainer.style.position = 'absolute';
  alertContainer.style.width = '50%';
  alertContainer.style.minHeight = '50px';
  alertContainer.style.lineHeight = '1em';
  alertContainer.style.lineheight = '5px';
  alertContainer.style.transform = 'translate(-50%, -50%)';
  alertContainer.style.left = '50%';
  alertContainer.style.top = '50%';
  alertContainer.style.right = '0';
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';
  alertContainer.textContent = message;
  document.body.append(alertContainer);
  setTimeout(() => {
    alertContainer.remove();
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

//Функция открытия модального окна при ошибке загрузки
const onPopupErrorClose = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    modalCloseError();
  }
};

//Функция открытия модального окна при ошибке при загрузки
function modalOpenError() {
  bodyElement.appendChild(errorModalElement);
  errorModalElement.style.zIndex = '100'; //Добавлено
  bodyElement.classList.add('modal-open');
  document.addEventListener('click', onClickEmptyAreaError);
  document.addEventListener('keydown', onPopupErrorClose);
  errorCloseButton.addEventListener('click', modalCloseError);
}

//Функция закрытия модального окна при ошибке при загрузки
function modalCloseError() {
  errorModalElement.remove();
  bodyElement.classList.remove('modal-open');
  document.removeEventListener('keydown', onPopupErrorClose);
}

export {isEscapeKey, showAlert, modalOpenSuccess, modalOpenError};
