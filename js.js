var num = [];
num[0] = Math.floor (Math.random() * 10);
num[1] = Math.floor (Math.random() * 10);
num[2] = Math.floor (Math.random() * 10);
num[3] = Math.floor (Math.random() * 10);

while (num[1] == num[0]) {
    num[1] = Math.floor (Math.random() * 10);
}
while (num[2] == num[0] || num[2] == num[1]) {
    num[2] = Math.floor (Math.random() * 10);
}
while (num[3] == num[0] || num[3] == num[1] || num[3] == num[2]) {
    num[3] = Math.floor (Math.random() * 10);
}

console.log(num);

var check = function (user) {123
    let playerArray = [];
    let playerArrElement;
    for (let i=0; i < 4; i++) {
        playerArrElement = parseInt(user.substr(i, 1));
        playerArray.push(playerArrElement);
    }
    let bulls = 0;
    let cows = 0;
    for (let i=0; i < 4; i++) {
        if (playerArray[i] == num[i]) {
            bulls++;
        } else if (num.indexOf(playerArray[i]) >= 0) {
            cows++;
        }
    }
    console.log(user);
    console.log('быков: ' + bulls + ', ' + 'коров: ' + cows);
    if (bulls == 4) {
        console.log('Вы угадали!');
        return true;
    }
};
var game = function () {
    let counter = 0;
    let end = false;
    console.log ('Игра началась');
    while (end != true) {
        if (counter == 9) {
            alert ('Game Over!' + "Правильный ответ: " + num);
            break;
        } else {
            let userNumber = prompt ('Введите число');
            counter++;
            end = check(userNumber);
        }
    }
}
game ();

/* Практикум из 2 методички
1.	Браузер генерирует число и приглашает пользователя к игре.
2.	Выводится окно запроса предположения.
3.	Браузер проверяет число и возвращает результат.
4.	Повторяем до тех пор, пока число не будет угадано.
5.	Как только число угадано, браузер сбрасывает число попыток и генерирует новое число.
*/
console.log('Практикум из 2 методички');
var number = Math.floor(Math.random() * (9999 - 1000 + 1) + 1000);
console.log('Сыграем в угадайку?');
do {
    while (true) {
        let playerNumber = prompt('Введите четырехзначное число');
        if (playerNumber > number) {
            console.log(playerNumber + ' -' + 'Увы, это перебор...');  
        } else if (playerNumber < number) {
            console.log(playerNumber + ' -' + 'Увы, это маловато...');
        } else {
            console.log(playerNumber + ' -' + 'Ура ты угадал мое число!');
            break;
        }
    }
} while (prompt("Сыграем еще? 1-да, иначе - нет")=="1")

// Домашнее задание 

// 1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100.
console.log('Выводим все простые числа в промежутке от 0 до 100.');
var SimpleNumber = function (n_) {
    if (n_ < 2) {
        return false
    }
    let count = 2;
    while (count < n_) {
        if(n_ % count === 0) {
            return false;
        }
        count++;
    }
    return true;
}

var getSimpleNumber = function (maxNumber) {
    let n = 0;
    let arr = [];

    while (n < maxNumber) {
        if (SimpleNumber(n) == true) {
            arr.push(n);
        }
        n++;
    }
    console.log(arr);
}

getSimpleNumber (100);

/*2. С этого урока начинаем работать с функционалом интернет-магазина. 
Предположим, есть сущность корзины. Нужно реализовать функционал подсчета стоимости 
корзины в зависимости от находящихся в ней товаров.
3. Товары в корзине хранятся в массиве. Задачи:
a) Организовать такой массив для хранения товаров в корзине;
b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.*/
console.log('Считаем сумму товаров в корзине');
var good1 ={name:'telephone', price:500};
var good2 = {name:'tablet', price:800};
var good3 = {name:'laptop', price:1500};

var basket = [good1, good2, good3];

var countBasketPrice = function (x) {
    var countBasket = 0;
    for (i = 0; i<basket.length; i++) {
        countBasket = countBasket + basket[i].price;
    }
    return countBasket;
}
console.log('Сумма товаров в корзине: '+ countBasketPrice(basket));

//4. Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла. Выглядеть это должно так:
console.log('Вывести с помощью цикла for числа от 0 до 9');
for (var i = 0; i < 9; i++, console.log(i)) {};

//5. Нарисовать пирамиду с 20 рядами с помощью console.log
console.log('Нарисовать пирамиду с 20 рядами');
var row = "x";
var symbol = "x"
var nowRow = 1;
console.log(nowRow + ' ' + row)
while (nowRow < 20) {
    row += symbol;
    nowRow++;
    console.log(nowRow + ' ' + row);
}




