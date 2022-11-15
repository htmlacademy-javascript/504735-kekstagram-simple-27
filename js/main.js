import './effects.js';
import './scale.js';
import './upload-photo.js';
import {debounce} from './utils.js';
import {initFilterListeners} from './filters.js';
import {initListenerUserFormSubmit} from './upload.js';
import {getData} from './api.js';
import {showThumbnails} from './thumbnails.js';
import {closeForm} from './open-close-form.js';

const RERENDER_DELAY = 500;

getData((photos) => {
  showThumbnails(photos);
  initFilterListeners(photos, debounce(showThumbnails, RERENDER_DELAY));
});

initListenerUserFormSubmit(closeForm);
