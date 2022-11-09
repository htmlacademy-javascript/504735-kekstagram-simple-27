import {isEscapeKey} from './utils.js';
import {clearScaleValue} from './scale.js';
import {resetEffects} from './effects.js';

const openFormElement = document.querySelector('#upload-file');
const formEditImageElement = document.querySelector('.img-upload__overlay');
const bodyElement = document.querySelector('body');
const closeFormElement = document.querySelector('#upload-cancel');
const imgUploadElement = document.querySelector('.img-upload__form');

const onClickBtnClose = (evt) => {
  evt.preventDefault();
  closeForm();
};

const onClickEscBtn = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    const hasHiddenPopup = document.querySelector('.error');
    if(!hasHiddenPopup){
      closeForm();
    }
  }
};

const openForm = () => {
  formEditImageElement.classList.remove('hidden');
  bodyElement.classList.add('modal-open');

  document.addEventListener('keydown', onClickEscBtn);
  closeFormElement.addEventListener('click', onClickBtnClose);
};

function closeForm() {
  formEditImageElement.classList.add('hidden');
  bodyElement.classList.remove('modal-open');
  imgUploadElement.reset();
  clearScaleValue();
  resetEffects();

  document.removeEventListener('keydown', onClickEscBtn);
  closeFormElement.removeEventListener('click', onClickBtnClose);
}

openFormElement.addEventListener('change', openForm);

export {openForm, closeForm, onClickBtnClose, onClickEscBtn};
