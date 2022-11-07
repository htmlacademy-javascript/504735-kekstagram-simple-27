const EFFECTS = [
  {
    name: 'none',
    min: 0,
    max: 100,
    step: 1,
    start: 100,
  },
  {
    name: 'chrome',
    style: 'grayscale',
    min: 0,
    max: 1,
    step: 0.1,
    unit : '',
  },
  {
    name: 'sepia',
    style: 'sepia',
    min: 0,
    max: 1,
    step: 0.1,
    unit : '',
  },
  {
    name: 'marvin',
    style: 'invert',
    min: 0,
    max: 100,
    step: 1,
    unit : '%',
  },
  {
    name: 'phobos',
    style: 'blur',
    min: 0,
    max: 3,
    step: 0.1,
    unit : 'px',
  },
  {
    name: 'heat',
    style: 'brightness',
    min: 1,
    max: 3,
    step: 0.1,
    unit : '',
  }
];

const DEFAULT_EFFECT = EFFECTS[0];

// Форма
const formElement = document.querySelector('.img-upload__form');
//Картинка предварительного просмотра.
const imgDefaultElement = document.querySelector('.img-upload__preview img');
// Слайдер.
const sliderElement = document.querySelector('.effect-level__slider');
//Значение уровня эффекта
const effectLevelValue = document.querySelector('.effect-level__value');

let chosenEffect = DEFAULT_EFFECT;

const isDefault = () => chosenEffect === DEFAULT_EFFECT;

const updateSlider = () => {
  sliderElement.classList.remove('hidden');
  sliderElement.noUiSlider.updateOptions({
    range: {
      min: chosenEffect.min,
      max: chosenEffect.max,
    },
    step: chosenEffect.step,
    start: chosenEffect.max,
  });

  if(isDefault()) {
    sliderElement.classList.add('hidden');
  }
};

const onFormChange = (evt) => {
  if(!evt.target.classList.contains('effects__radio')) {
    return;
  }
  chosenEffect = EFFECTS.find((effect) => effect.name === evt.target.value);
  updateSlider();
};

const onSliderUpdate = () => {
  imgDefaultElement.style.filter = 'none';
  imgDefaultElement.className = '';
  effectLevelValue.value = '';
  if(isDefault()){
    return;
  }
  const sliderValue = sliderElement.noUiSlider.get();
  imgDefaultElement.style.filter = `${chosenEffect.style}(${sliderValue}${chosenEffect.unit})`;
  imgDefaultElement.classList.add(`effects__preview--${chosenEffect.name}`);
  effectLevelValue.value = sliderValue;
};

const resetEffects = () => {
  chosenEffect = DEFAULT_EFFECT;
  updateSlider();
};

noUiSlider.create(sliderElement, {
  range: {
    min: DEFAULT_EFFECT.min,
    max: DEFAULT_EFFECT.max,
  },
  step: DEFAULT_EFFECT.step,
  start: DEFAULT_EFFECT.max,
  connect: 'lower',
});

updateSlider();

formElement.addEventListener('change', onFormChange);
sliderElement.noUiSlider.on('update', onSliderUpdate);

export {resetEffects};
