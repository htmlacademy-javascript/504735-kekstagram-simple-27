import {openSuccessModal, openErrorModal} from './modal-windows.js';
import {sendData} from './api.js';

// Форма загрузки фотографии.
const imgUploadElement = document.querySelector('.img-upload__form');
//Кнопка отправки формы
const submitButton = document.querySelector('.img-upload__submit');

//Функция блокировки отправки формы во время отправки.
const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = 'Сохраняю...';
};

//Функция разблокировки кнопки после отправки
const unblockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = 'Сохранить';
};

const initUploadForm = (onSuccess) => {
  imgUploadElement.addEventListener('submit', (evt) => {
    evt.preventDefault();
    blockSubmitButton();
    sendData(
      () => {
        onSuccess();
        unblockSubmitButton();
        openSuccessModal();
      },
      () => {
        unblockSubmitButton();
        openErrorModal();
      },
      new FormData(evt.target),
    );
  });
};

export {initUploadForm};
