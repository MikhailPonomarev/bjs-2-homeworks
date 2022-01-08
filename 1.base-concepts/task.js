"use strict";

function solveEquation(a, b, c) {
    let arr = [];
    // код для задачи №1 писать здесь
    let discriminant = Math.pow(b, 2) - 4 * a * c;
    if (discriminant === 0) {
        let x = -b / (2 * a);
        arr.push(x);
    } else if (discriminant > 0) {
        let x1 = ((-b + Math.sqrt(discriminant)) / 2) * a;
        let x2 = ((-b - Math.sqrt(discriminant)) / 2) * a;
        arr.push(x1, x2);
    }
    return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
    // код для задачи №2 писать здесь
    if (percent === "test") {
        let exception = `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;
        console.log(exception);
        return exception;
    } else if (contribution === "test") {
        let exception = `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`;
        console.log(exception);
        return exception;
    } else if (amount === "test") {
        let exception = `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`;
        console.log(exception);
        return exception;
    } else {
        let totalAmount;
        let percentage = percent / 100 / 12;
        let loanBody = amount - contribution;

        function monthsToPay() {
            let months;
            let currentDate = new Date(
                new Date().setFullYear(new Date().getFullYear())
            );
            months = (date.getFullYear() - currentDate.getFullYear()) * 12;
            months -= currentDate.getMonth();
            months += date.getMonth();
            return months <= 0 ? 0 : months;
        }

        let monthlyPayment =
            loanBody *
            (percentage + percentage / ((1 + percentage) ** monthsToPay() - 1));
        totalAmount = +(monthlyPayment * monthsToPay()).toFixed(2);

        console.log(totalAmount);
        return totalAmount;
    }
}
