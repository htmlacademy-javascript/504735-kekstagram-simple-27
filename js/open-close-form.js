import {isEscapeKey} from './utils.js';
import {setDefaultValue} from './scale.js';
import {resetEffects} from './effects.js';

const openFormElement = document.querySelector('#upload-file');
const formEditImageElement = document.querySelector('.img-upload__overlay');
const bodyElement = document.querySelector('body');
const closeFormElement = document.querySelector('#upload-cancel');
const imgUploadElement = document.querySelector('.img-upload__form');

const onBtnCloseClick = (evt) => {
  evt.preventDefault();
  closeForm();
};

const onBtnEscClick = (evt) => {
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

  document.addEventListener('keydown', onBtnEscClick);
  closeFormElement.addEventListener('click', onBtnCloseClick);
};

function closeForm() {
  formEditImageElement.classList.add('hidden');
  bodyElement.classList.remove('modal-open');
  imgUploadElement.reset();
  setDefaultValue();
  resetEffects();

  document.removeEventListener('keydown', onBtnEscClick);
  closeFormElement.removeEventListener('click', onBtnCloseClick);
}

openFormElement.addEventListener('change', openForm);

export {openForm, closeForm, onBtnCloseClick, onBtnEscClick};
