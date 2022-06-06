"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Crianca = void 0;
class Crianca {
    nome;
    idade;
    sexo;
    constructor(nome, idade, sexo) {
        this.nome = nome;
        this.idade = idade;
        this.sexo = sexo;
    }
    printData() {
        console.log(`Nome: ${this.nome}, idade: ${this.idade}, sexo: ${this.sexo}`);
    }
}
exports.Crianca = Crianca;
