interface IUser {
  id: number;
  name: string;
  email: string;
  phone: number;
}

class Usr implements IUser {
  id;
  name;
  email;
  phone;

  constructor(id: number, name: string, email: string, phone: number) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.phone = phone;
  }

  printDataUser() {
    console.log("Os dados de usuário são: ");
    console.log(`id: ${this.id}`);
    console.log(`name: ${this.name}`);
    console.log(`email: ${this.email}`);
    console.log(`phone: ${this.phone}`);
  }
}

const usuario = new Usr(Math.random(), "Thyago", "thyago.teste@gmail.com", 94839584);

//console.log(usuario);

//usuario.printDataUser();

// ----------------------------------------------------

interface ICar {
  marca: string;
  ano: number;
  rodas: number;
  estado: string;
  placa: string;
}

const printDataCar = (dataCar: ICar) => {
  return console.log(`A marca do carro é ${dataCar.marca}, o ano é ${dataCar.ano}. O veiculo possui ${dataCar.rodas} rodas e é ${dataCar.estado}. Cadastrado sob placa ${dataCar.placa}`);
}

//console.log(printDataCar({marca: "VW", ano: 2022, rodas: 4, estado: "Semi novo", placa: "DSF-546"}));

// ------------------------------------------------------

const printArray = <T>(arr: T[]) => {
  arr.forEach((item) => {
    if (typeof(item) === "object") {
      console.log(`ITEM: ${JSON.stringify(item)}`);
      return;
    }
    console.log(`ITEM: ${item}`);
  });
}

const exampleOne = [1, 3, 5, 6];
const exampleTwo = ["a", "c", "e"];
const exampleTree = [
  {
    id: 294729,
    name: "Thyago",
    age: 34
  },
  {
    id: 657,
    name: "Josefa",
    age: 23
  },
  {
    id: 325235,
    name: "Clebim",
    age: 86
  },
  {
    id: 46456,
    name: "Jão",
    age: 19
  },
];

//printArray(exampleOne);
//printArray(exampleTwo);
//printArray(exampleTree);

// ------------------------------------------------------

console.log("Logo continuo...");