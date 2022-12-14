const MAX_SCALE_RANGE = 100;
const MIN_SCALE_RANGE = 25;

//Кнопка уменьшения фотографии
const makeSmallerElement = document.querySelector('.scale__control--smaller');
//Кнопка увеличения фотографии
const makeBiggerElement = document.querySelector('.scale__control--bigger');
//Инпут со значением.
const valueElement = document.querySelector('.scale__control--value');
//Картинка по умолчанию
const imgDefaultElement = document.querySelector('.img-upload__preview');

let sizeValue = 100;

// Функция изменения размера фотографии
const initScaleControl = () => {

  makeSmallerElement.addEventListener('click', () => {
    if(sizeValue > MIN_SCALE_RANGE) {
      sizeValue -= MIN_SCALE_RANGE;
      valueElement.value = `${sizeValue}%`;
      imgDefaultElement.style.transform = `scale(${sizeValue / 100})`;
    }
  });

  makeBiggerElement.addEventListener('click', () => {
    if(sizeValue < MAX_SCALE_RANGE) {
      sizeValue += MIN_SCALE_RANGE;
      valueElement.value = `${sizeValue}%`;
      imgDefaultElement.style.transform = `scale(${sizeValue / 100})`;
    }
  });
};

//Функция установки значения масштаба.
const setScaleValue = (value) => {
  valueElement.value = `${value}%`;
  imgDefaultElement.style.transform = `scale(${value / 100})`;
};

setScaleValue(sizeValue);

//Функция очищения значения масштаба.
const setDefaultValue = () => {
  sizeValue = MAX_SCALE_RANGE;
  setScaleValue(MAX_SCALE_RANGE);
  imgDefaultElement.style.transform = `scale(${sizeValue / 100})`;
};

initScaleControl();

export {setDefaultValue};
