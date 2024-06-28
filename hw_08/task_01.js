/*
Task 1.
Имеется массив объектов (ниже). Ваше задание:
*/

const characters = [
    { 'name': 'Barney', 'age': 36 },
    { 'name': 'Fred', 'age': 40 },
    { 'name': 'Jack', 'age': 50 },
];

// 1. Используя Object.keys и метод forEach вывести в консоль ключи каждого объекта
characters.forEach((object) => console.log(Object.keys(object)));

//2. Используя Object.values и метод forEach вывести в консоль значения каждого объекта
characters.forEach((object) => console.log(Object.values(object)));

// 3. Перебрать форычем массив. На каждой итерации вывести пары ключ-значение в виде `key = ${key}, value = ${value}`.
//    Перебирать каждый объект циклом for..of вида for(const [key, value] of Object.entries)
characters.forEach((object) => {
    for (const [key, value] of Object.entries(object)) { //для каждого значения
        console.log(`for of: key = ${key}, value = ${value}`)
    };
});

// 4. Перебрать форычем массив. На каждой итерации вывести пары ключ-значнение в виде `key = ${key}, value = ${value}`.
//    Перебирать каждый объект циклом for..in
characters.forEach((object) => {
    for (key in object) { //для каждого индекса
        console.log(`for in: key = ${key}, value = ${object[key]}`)
        console.log(object[key])
    }
});

// 5. Создайте объект qa с полями name, age, salary и методом getInfo, который будет возвращать строку вида: 
//    `Hello, my name is ${name}, i'm ${age} and my salary is ${salary}`. Значения в строке должны ссылаться на контекст ЭТОГО ОБЪЕКТА, без подмен.

const qa = {
    name: 'Elena',
    age: 20,
    salary: 4000,
    getInfo() {
        return (`Hello, my name is ${this.name}, i'm ${this.age} and my salary is ${this.salary}`)
    }
};
console.log(qa.getInfo())
// console.log(qa)

