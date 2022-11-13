import './effects.js';
import './scale.js';
import './upload-photo.js';
import {debounce} from './utils.js';
import {setFilters} from './filters.js';
import {setUserFormSubmit} from './upload.js';
import {getData} from './api.js';
import {createThumbnailsList} from './thumbnails.js';
import {closeForm} from './open-close-form.js';

const RERENDER_DELAY = 500;

getData((photos) => {
  createThumbnailsList(photos);
  setFilters(photos, debounce(createThumbnailsList, RERENDER_DELAY));
});

setUserFormSubmit(closeForm);
