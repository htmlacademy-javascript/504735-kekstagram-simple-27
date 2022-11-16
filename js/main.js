import './effects.js';
import './scale.js';
import './upload-photo.js';
import {debounce} from './utils.js';
import {initFilterListeners} from './filters.js';
import {initUploadForm} from './upload.js';
import {getData} from './api.js';
import {renderThumbnails} from './thumbnails.js';
import {closeForm} from './open-close-form.js';

const RERENDER_DELAY = 500;

getData((photos) => {
  renderThumbnails(photos);
  initFilterListeners(photos, debounce(renderThumbnails, RERENDER_DELAY));
});

initUploadForm(closeForm);
