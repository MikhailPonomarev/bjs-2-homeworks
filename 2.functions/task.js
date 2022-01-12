// Задание 1
function getArrayParams(arr) {
    // Ваш код
    let min = arr[0];
    let max = arr[0];
    let sum = 0;

    for (let element of arr) {
        if (element > max) {
            max = element;
        } else if (element < min) {
            min = element;
        }
        sum += element;
    }

    let avg = Number((sum / arr.length).toFixed(2));

    return {min: min, max: max, avg: avg};
}

// Задание 2
function worker(arr) {
    // Ваш код
    let sum = 0;

    for (let element of arr) {
        sum += element;
    }

    return sum;
}

function makeWork(arrOfArr, func) {
    // Ваш код
    let max = -Infinity;
    for (let element of arrOfArr) {
        let sumOfArray = func(element);
        if (max < sumOfArray) {
            max = sumOfArray;
        }
    }
    return max;
}

// Задание 3
function worker2(arr) {
    // Ваш код
    return Math.abs(getArrayParams(arr).min - getArrayParams(arr).max);
}
