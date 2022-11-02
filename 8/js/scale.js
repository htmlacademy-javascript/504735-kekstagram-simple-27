//Кнопка уменьшения фотографии
const makeSmallerElement = document.querySelector('.scale__control--smaller');
//Кнопка увеличения фотографии
const makeBiggerElement = document.querySelector('.scale__control--bigger');
//Инпут со значением.
const valueElement = document.querySelector('.scale__control--value');
//Картинка по умолчанию
const imgDefaultElement = document.querySelector('.img-upload__preview');

const MAX_SCALE_RANGE = 100;
const MIN_SCALE_RANGE = 25;

let sizeValue = 100;

// Функция изменения размера фотографии
const editSize = () => {

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
const getScaleValue = (value) => {
  valueElement.value = `${value}%`;
  imgDefaultElement.style.transform = `scale(${value / 100})`;
};

getScaleValue(sizeValue);

//Функция очищения значения масштаба.
const clearScaleValue = () => {
  sizeValue = MAX_SCALE_RANGE;
  getScaleValue(MAX_SCALE_RANGE);
  imgDefaultElement.style.transform = `scale(${sizeValue / 100})`;
};

editSize();

export {clearScaleValue};
