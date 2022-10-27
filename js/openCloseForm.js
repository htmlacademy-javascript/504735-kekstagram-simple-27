import {isEscapeKey} from './utils.js';

const openForm = document.querySelector('#upload-file');
const formRedactImage = document.querySelector('.img-upload__overlay');
const body = document.querySelector('body');
const closeFormBtn = document.querySelector('#upload-cancel');
const imgUploadForm = document.querySelector('.img-upload__form');

const onClickBtnClose = () => closeFormBtn.addEventListener('click', (evt) => {
  evt.preventDefault();
  closeForm();
});

const onClickEscBtn = () => document.addEventListener('keydown', (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeForm();
  }
});

openForm.addEventListener('change', () => {
  formRedactImage.classList.remove('hidden');
  body.classList.add('modal-open');

  document.addEventListener('keydown', onClickEscBtn);
  document.addEventListener('click', onClickBtnClose);
});

// Такой способ объявления функции так как мы ее вызываем раньше чем объявили!
function closeForm() {
  formRedactImage.classList.add('hidden');
  body.classList.remove('modal-open');
  imgUploadForm.reset();

  document.removeEventListener('keydown', onClickEscBtn);
  document.removeEventListener('click', onClickBtnClose);
}
