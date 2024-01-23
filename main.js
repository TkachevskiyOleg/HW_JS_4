// 1
var start = parseInt(prompt("Введіть початкове число:"));
var end = parseInt(prompt("Введіть кінцеве число:"));
var sum = 0;

for (var i = start; i <= end; i++) {
    sum += i;
}

alert(`Сума чисел у діапазоні: ${sum}`);

// 2
var num1 = parseInt(prompt("Введіть перше число:"));
var num2 = parseInt(prompt("Введіть друге число:"));
var gcd;

while (num1 !== num2) {
    if (num1 > num2) {
        num1 -= num2;
    } else {
        num2 -= num1;
    }
}

gcd = num1;
alert(`Найбільший спільний дільник: ${gcd}`);

// 3
var number = parseInt(prompt("Введіть число:"));

for (var i = 1; i <= number; i++) {
    if (number % i === 0) {
        alert(`Дільник числа ${number}: ${i}`);
    }
}

// 4
var number = parseInt(prompt("Введіть число:"));
var digitCount = 0;

for (; number !== 0; number = Math.floor(number / 10)) {
    digitCount++;
}

alert(`Кількість цифр у числі: ${digitCount}`);

// 5
var positiveCount = 0;
var negativeCount = 0;
var zeroCount = 0;
var evenCount = 0;
var oddCount = 0;

for (var i = 0; i < 10; i++) {
    var input = parseInt(prompt("Введіть число:"));

    if (input > 0) {
        positiveCount++;
    } else if (input < 0) {
        negativeCount++;
    } else {
        zeroCount++;
    }

    if (input % 2 === 0) {
        evenCount++;
    } else {
        oddCount++;
    }
}

alert(`Додатні: ${positiveCount}, Від'ємні: ${negativeCount}, Нулі: ${zeroCount}, Парні: ${evenCount}, Непарні: ${oddCount}`);

// 6
do {
    var num1 = parseFloat(prompt("Введіть перше число:"));
    var num2 = parseFloat(prompt("Введіть друге число:"));
    var operator = prompt("Введіть математичний знак (+, -, *, /):");
    var result;

    switch (operator) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            result = num1 / num2;
            break;
        default:
            alert("Некоректний оператор");
            continue;
    }

    alert(`Результат: ${result}`);
} while (confirm("Хочете розв'язати ще один приклад?"));

// 7
var number = prompt("Введіть число:");
var shift = parseInt(prompt("На скільки цифр його змістити:"));

for (var i = 0; i < shift; i++) {
    number = number.slice(1) + number[0];
}

alert(`Результат зсуву: ${number}`);

//8
var daysOfWeek = ['Понеділок', 'Вівторок', 'Середа', 'Четвер', 'Пятниця', 'Субота', 'Неділя']

do {
    var dayIndex = prompt(`День тижня: ${daysOfWeek[0]}. Бажаєте побачити назву наступного дня тижня?`);
    if (dayIndex >= 0 && dayIndex < 6) {
        alert(`Наступний день тижня: ${daysOfWeek[dayIndex + 1]}`);
    } else if (dayIndex == 6) {
        alert(`Наступний день тижня: ${daysOfWeek[0]}`);
    } else {
        alert('Введено некоректний індекс дня тижня.');
    }
} while (confirm("Бажаєте продовжити?"));

//9
for (var i = 2; i <= 9; i++) {
    for (var j = 1; j <= 10; j++) {
        var result = i * j;
        console.log(`${i} * ${j} = ${result}`);
    }
}

//10
var minRange = 0;
var maxRange = 100;

do {
    var middle = Math.floor((minRange + maxRange) / 2);
    var userResponse = prompt(`Ваше число > ${middle}, < ${middle}, або == ${middle}?`);

    if (userResponse === ">") {
        minRange = middle + 1;
    } else if (userResponse === "<") {
        maxRange = middle - 1;
    } else if (userResponse === "==") {
        alert(`Ваше число: ${middle}`);
        break;
    } else {
        alert("Введено некоректну відповідь. Гра завершується.");
        break;
    }
} while (minRange <= maxRange);
