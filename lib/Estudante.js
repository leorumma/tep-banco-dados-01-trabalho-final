"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Estudante = void 0;
const Pessoa_1 = require("./Pessoa");
class Estudante extends Pessoa_1.Pessoa {
    constructor(nome, idade, aniversario, identificador) {
        super(nome, idade, aniversario, identificador);
    }
}
exports.Estudante = Estudante;
