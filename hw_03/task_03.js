// Task3**. Напишите программу, которая принимает целое положительное число n (одно любое число от 1 до 9), 
// и выводит сумму равную n + nn + nnn, где n не перемножаются, а конкатенируются


let n = 3;
const sum = n + Number(String(n) + n) + Number(String(n) + n + n);
console.log(sum)