import {photos} from './data.js';

const userPhotosList = document.querySelector('.pictures');
const userPictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const userPhotos = photos();
const photosListFragment = document.createDocumentFragment();

userPhotos.forEach((photo) => {
  const photoElement = userPictureTemplate.cloneNode(true);
  photoElement.querySelector('.picture__img').src = photo.url;
  photoElement.querySelector('.picture__comments').textContent = photo.comments;
  photoElement.querySelector('.picture__likes').textContent = photo.likes;
  photosListFragment.appendChild(photoElement);
});

userPhotosList.appendChild(photosListFragment);
