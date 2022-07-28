import {Pessoa} from "./Pessoa";

export class Professor extends Pessoa {

    constructor(nome: String, idade: Number, aniversario: String, identificador: String) {
        super(nome, idade, aniversario, identificador);
    }

}
