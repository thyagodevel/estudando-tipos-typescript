"use strict";
class Usr {
    id;
    name;
    email;
    phone;
    constructor(id, name, email, phone) {
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
const printDataCar = (dataCar) => {
    return console.log(`A marca do carro é ${dataCar.marca}, o ano é ${dataCar.ano}. O veiculo possui ${dataCar.rodas} rodas e é ${dataCar.estado}. Cadastrado sob placa ${dataCar.placa}`);
};
const printArray = (arr) => {
    arr.forEach((item) => {
        if (typeof (item) === "object") {
            console.log(`ITEM: ${JSON.stringify(item)}`);
            return;
        }
        console.log(`ITEM: ${item}`);
    });
};
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
console.log("Logo continuo...");
