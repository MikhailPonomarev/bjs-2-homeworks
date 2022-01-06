// Задание 1
function getArrayParams(arr) {
    let min, max, sum, avg;

    // Ваш код
    min = arr[0];
    max = arr[0];
    sum = 0;

    for (let element of arr) {
        if (element > max) {
            max = element;
        } else if (element < min) {
            min = element;
        }
        sum += element;
    }

    avg = Number((sum / arr.length).toFixed(2));

    return {min: min, max: max, avg: avg};
}

// Задание 2
function worker(arr) {
    let sum;

    // Ваш код

    return sum;
}

function makeWork(arrOfArr, func) {
    let max;

    // Ваш кода
    // for ...

    return max;
}

// Задание 3
function worker2(arr) {
    // Ваш код
}
