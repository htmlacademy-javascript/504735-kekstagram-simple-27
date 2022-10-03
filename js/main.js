// Генератор числа в диапазоне

function getRandomNumbers(from, to) {
    if (Number.isInteger(from) && Number.isInteger(to)) {
        if (from <= to) {
            return Math.floor(Math.random() * (to - from + 1)) + from;
        } else {
            return  'Cтартовое значение не может быть меньше или равно конечному :(. Попробуйте еще раз!';
        }
    } else {
        return NaN;
    }
}

let randNum = getRandomNumbers(7, 5);
console.log(randNum);
// Проверка длянны строки

function checkLength(str, minLength, maxLength) {
    if(str.length <= maxLength && str.length >= minLength) {
        return true;
    }

    return false;
}

let strLength = checkLength('cообщение!', 9, 11);
console.log(strLength);