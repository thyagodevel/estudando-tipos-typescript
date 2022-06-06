"use strict";
let x = 10;
x = 12;
console.log(x);
let y = 12;
let z = 12;
let firstName = "Thyago";
let age = 24;
const isAdmin = true;
console.log(typeof (firstName));
const myNumbers = [1, 2, 3];
myNumbers.push(5);
console.log(myNumbers);
let myTuple;
myTuple = [5, "teste", ["a", "b"]];
const user = {
    name: "Thyago",
    age: 24
};
console.log(user);
console.log(user.age);
let a = 0;
a = "teste";
a = true;
a = [];
let id = "10";
id = 200;
const userId = 10;
const productId = "5834958";
const shirId = 123;
var size;
(function (size) {
    size["P"] = "Pequeno";
    size["M"] = "M\u00E9dio";
    size["G"] = "Grande";
})(size || (size = {}));
const camisa = {
    name: "Camisa gola V",
    size: size.G,
};
console.log(camisa);
let teste;
teste = "autenticado";
teste = null;
function sum(a, b) {
    return a + b;
}
;
console.log(sum(12, 12));
function sayHelloTo(name) {
    return `hello ${name}`;
}
;
console.log(sayHelloTo("Thyago"));
function logger(msg) {
    console.log(msg);
}
;
logger("Teste!");
function greeting(name, greet) {
    if (greet) {
        console.log(`Olá ${greet} ${name}`);
        return;
    }
    ;
    console.log(`Olá ${name}`);
}
;
greeting("josé");
greeting("josé", "Sir");
;
function sumNumber(nums) {
    return nums.n1 + nums.n2;
}
;
console.log(sumNumber({ n1: 1, n2: 2 }));
function multiplyNumber(nums) {
    return nums.n1 * nums.n2;
}
;
console.log(multiplyNumber({ n1: 2, n2: 2 }));
const someNumber = {
    n1: 5,
    n2: 10
};
console.log(multiplyNumber(someNumber));
function doSomething(info) {
    if (typeof info === "number") {
        console.log(`O número é ${info}`);
        return;
    }
    console.log("Não foi passado um número");
}
;
doSomething(5);
doSomething(true);
function showArraysItems(arr) {
    arr.forEach((item) => {
        console.log(`ITEM: ${item}`);
    });
}
;
const a1 = [1, 2, 3];
const a2 = ["a", "b", "c"];
showArraysItems(a1);
showArraysItems(a2);
class User {
    name;
    role;
    isApproved;
    constructor(name, role, isApproved) {
        this.name = name;
        this.role = role;
        this.isApproved = isApproved;
    }
}
const zeca = new User("Zéca", "Admin", true);
console.log(zeca);
