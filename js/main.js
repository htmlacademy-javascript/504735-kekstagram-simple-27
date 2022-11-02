import {photos} from './data.js';
import './effects.js';
// import {editSize} from './scale.js';
import './scale.js';
import './upload.js';
import './utils.js';
import './thumbnails.js';
import {openForm, closeForm, onClickBtnClose, onClickEscBtn} from './openCloseForm.js';

photos();
onClickEscBtn();
onClickBtnClose();
openForm();
closeForm();
// editSize();
