import { Produto } from "./Produto";
export declare class Revista implements Produto {
    private _nome;
    private _valor;
    private _editora;
    private _descricao;
    constructor(nome: string, valor: number, editora: string, descricao: string);
    get nome(): string;
    set nome(value: string);
    get valor(): number;
    set valor(value: number);
    get editora(): string;
    set editora(value: string);
    get descricao(): string;
    set descricao(value: string);
}
