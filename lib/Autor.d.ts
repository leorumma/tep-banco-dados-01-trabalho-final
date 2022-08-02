import { Pessoa } from "./Pessoa";
export declare class Autor implements Pessoa {
    constructor(nome: string, identificador: string, email: string, idade?: number, aniversario?: string);
    nome: string;
    identificador: string;
    idade: number | undefined;
    aniversario: string | undefined;
    email: string;
}
