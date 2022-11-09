import './effects.js';
import './scale.js';
import './utils.js';
import {setUserFormSubmit} from './upload.js';
import {getData} from './api.js';
import {thumbnailsList} from './thumbnails.js';
import {closeForm} from './openCloseForm.js';

getData((photos) => {
  thumbnailsList(photos);
});
setUserFormSubmit(closeForm);
