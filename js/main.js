import './effects.js';
import './scale.js';
import {setUserFormSubmit} from './upload.js';
import {getData} from './api.js';
import {thumbnailsList} from './thumbnails.js';
import {openForm, closeForm, onClickBtnClose, onClickEscBtn} from './openCloseForm.js';

openForm();
closeForm();
onClickEscBtn();
onClickBtnClose();

getData((photos) => {
  thumbnailsList(photos);
});
setUserFormSubmit(closeForm);

