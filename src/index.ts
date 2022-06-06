// string, boolean, number, ...
let x: number = 10;

x = 12;

console.log(x);

// inferencia x annotation (duas formas de se definir valor com typescript)
let y = 12; // inferencia

let z: number = 12; // annotation (torna o código mais explícito)

// tipos básicos
let firstName: string = "Thyago";

let age: number = 24;

const isAdmin: boolean = true;

// Em typescript os tipos sempre são trabalhados em caracteres minusculos, pois String != string.

console.log(typeof(firstName));

// tipos object
const myNumbers: number[] = [1, 2, 3];

myNumbers.push(5);

console.log(myNumbers);

// tuplas (deve ser criado seguindo a ordem, se não o ts reclama)
let myTuple: [number, string, string[]];

myTuple = [5, "teste", ["a", "b"]];
//myTuple = [true, false, true] // Da erro

// object literals -> {prop: value}
const user: {name: string, age: number} = {
  name: "Thyago",
  age: 24
};

console.log(user);
console.log(user.age);

// any (deve ser evitado)
let a: any = 0;

a = "teste";

a = true;

a = [];

// union type
let id: string | number = "10";

id = 200;
// id = true // da erro
// id = [] // da erro

// type alias
type myIdType = number | string;

const userId: myIdType = 10;

const productId: myIdType = "5834958";

const shirId: myIdType = 123;

// enum
// tamanho de roupas (size: Médio, size: Pequeno)
enum size {
  P = "Pequeno",
  M = "Médio",
  G = "Grande"
}

const camisa = {
  name: "Camisa gola V",
  size: size.G,
}

console.log(camisa);

// literal types
let teste: "autenticado" | null;

// teste = "outrovalor"; // da erro
teste = "autenticado";
teste = null;

// funções
function sum(a: number, b: number) {
  return a + b;
};

console.log(sum(12, 12));
// console.log(sum("12", true)); // da erro

function sayHelloTo(name: string): string { // Definindo tipagem para o retorno
  return `hello ${name}`;
};

console.log(sayHelloTo("Thyago"));

function logger(msg: string): void { // void é o tipo de função que não retorna nada
  console.log(msg);
};

logger("Teste!");

function greeting(name: string, greet?: string): void { // ? torna o parametro como opcional
  if(greet) {
    console.log(`Olá ${greet} ${name}`);
    return;
  };
  console.log(`Olá ${name}`);
};

greeting("josé");
greeting("josé", "Sir");

// interface
interface MathFunctionParams {
  n1: number,
  n2: number
};

function sumNumber(nums: MathFunctionParams) {
  return nums.n1 + nums.n2;
};

console.log(sumNumber({n1: 1, n2: 2}));

function multiplyNumber(nums: MathFunctionParams) {
  return nums.n1 * nums.n2;
};

console.log(multiplyNumber({n1: 2, n2: 2}));

const someNumber: MathFunctionParams = {
  n1: 5,
  n2: 10
};

console.log(multiplyNumber(someNumber));

// narrowing (checagem de tipos)
function doSomething(info: number | boolean) {
  if (typeof info === "number") {
    console.log(`O número é ${info}`);
    return;
  }
  console.log("Não foi passado um número");
};

doSomething(5);
doSomething(true);

// generics (aceita varios tipos de dados)
function showArraysItems<T>(arr: T[]) {
  arr.forEach((item) => {
    console.log(`ITEM: ${item}`);
  });
};

const a1 = [1, 2, 3];
const a2 = ["a", "b", "c"];

showArraysItems(a1);
showArraysItems(a2);

// classes
class User {
  name;
  role;
  isApproved;

  constructor(name: string, role: string, isApproved: boolean) {
    this.name = name;
    this.role = role;
    this.isApproved = isApproved;
  }
}

const zeca = new User("Zéca", "Admin", true);

console.log(zeca);