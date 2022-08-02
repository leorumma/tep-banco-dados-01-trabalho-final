import {Pessoa} from "./Pessoa";

export class Autor implements Pessoa {

    constructor(nome: string,
                identificador: string,
                email: string,
                idade?: number,
                aniversario?: string) {

        this.nome = nome;
        this.identificador = identificador;
        this.email = email;
        this.idade = idade;
        this.aniversario = aniversario;
    }

    public nome: string;
    public identificador: string;
    public idade: number|undefined;
    public aniversario: string|undefined;
    public email: string

}
