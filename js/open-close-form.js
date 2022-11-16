import {isEscapeKey} from './utils.js';
import {setDefaultValue} from './scale.js';
import {resetEffects} from './effects.js';

const openFormElement = document.querySelector('#upload-file');
const formEditImageElement = document.querySelector('.img-upload__overlay');
const bodyElement = document.querySelector('body');
const closeFormElement = document.querySelector('#upload-cancel');
const imgUploadElement = document.querySelector('.img-upload__form');

const onCloseBtnClick = (evt) => {
  evt.preventDefault();
  closeForm();
};

const onEscBtnClick = (evt) => {
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

  document.addEventListener('keydown', onEscBtnClick);
  closeFormElement.addEventListener('click', onCloseBtnClick);
};

function closeForm() {
  formEditImageElement.classList.add('hidden');
  bodyElement.classList.remove('modal-open');
  imgUploadElement.reset();
  setDefaultValue();
  resetEffects();

  document.removeEventListener('keydown', onEscBtnClick);
  closeFormElement.removeEventListener('click', onCloseBtnClick);
}

openFormElement.addEventListener('change', openForm);

export {openForm, closeForm, onCloseBtnClick, onEscBtnClick};
