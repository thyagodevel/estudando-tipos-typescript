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

  //metodo
  showUserName() {
    console.log(`O nome do usuário é ${this.name}`);
  }

  //metodo
  showUserRole(canShow: boolean) {
    if (canShow) {
      console.log(`O nome do usuário Administrador é: ${this.name}`);
      return;
    }
    console.log(`Usuário sem permissão!`);
  }
}

const zeca = new User("Zéca", "Admin", true);

console.log(zeca);

zeca.showUserName();

zeca.showUserRole(true);

// interfaces em classes
interface IVehicle {
  brand: string;
  showBrand(): void;
}

class Car implements IVehicle {
  brand;
  wheels;

  constructor(brand: string, wheels: number) {
    this.brand = brand;
    this.wheels = wheels;
  }

  showBrand(): void {
    console.log(`A marca do carro é: ${this.brand}`);
  }
}

const fusca = new Car("VW", 4);

fusca.showBrand();

// herança
class SuperCar extends Car {
  engine;

  constructor(brand: string, wheels: number, engine: number) {
    super(brand, wheels);
    this.engine = engine;
  }
}

const a4 = new SuperCar("Audi", 4, 2.0);

console.log(a4);
a4.showBrand();

// decorators
//constructor decorator
function BaseParameters() {
  return function <T extends {new (...args: any[]): {}}> (constructor: T) {
    return class extends constructor {
      id = Math.random();
      createdAt = new Date();
    };
  };
}

@BaseParameters()
class Person {
  name;

  constructor(name: string) {
    this.name = name;
  }
}

const sam = new Person("Sam");

console.log(sam);