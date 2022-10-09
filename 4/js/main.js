// Генератор числа в диапазоне
const NUMBER_OF_OBJECTS = 25;
const getRandomNumber = (from, to) => {
  if (from < 0 || to < 0) {
    return NaN;
  }
  if (Number.isInteger(from) && Number.isInteger(to)) {
    if (from < to) {
      return Math.floor(Math.random() * (to - from + 1)) + from;
    } else {
      return NaN;
    }
  } else {
    return NaN;
  }
};

const descriptionFoto = [
  'Шикарный вид!!!!',
  'Просто класс!',
  'Вау!!!',
  'Это просто великолепно!',
  'Ни разу такого не видел!',
  'Отличное фото.',
  'Попробуй не "лайкни"!',
  'Шикардос.',
  'Очень инткресно'
];
//Создание индекса массива описаний фотографий.
const getArrayElement = () => getRandomNumber(0, descriptionFoto.length - 1);

// создание массива случайных, неповторяющихся чисел фиксированной длинны.
const createArrayFixLength = () => {
  const arrayUnicNumbers = [];
  while (arrayUnicNumbers.length < NUMBER_OF_OBJECTS) {
    const randomNumber = getRandomNumber(1, NUMBER_OF_OBJECTS);
    if(arrayUnicNumbers.indexOf(randomNumber) === -1) {
      arrayUnicNumbers.push(randomNumber);
    }
  }
  return arrayUnicNumbers;
};

//Функция создающая один объект.
const createFoto = function(unicNumberId, unicNumberOfFoto) {
  return {
    id: unicNumberId,
    url: `photos/${unicNumberOfFoto}.jpg`,
    description: descriptionFoto[getArrayElement()],
    likes: getRandomNumber(15, 200),
    comments: getRandomNumber(0, 200)
  };
};

const fotos = () => {
  const arrayOfObjects = [];
  const unicId = createArrayFixLength(NUMBER_OF_OBJECTS);
  const unicNumberOfFoto = createArrayFixLength(NUMBER_OF_OBJECTS);
  for(let i = 0; i < NUMBER_OF_OBJECTS; i++) {
    arrayOfObjects.push(createFoto(unicId[i],unicNumberOfFoto[i]));
  }
  return arrayOfObjects;
};

fotos();
