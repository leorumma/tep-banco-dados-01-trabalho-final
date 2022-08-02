import {Produto} from "./Produto";

export class Revista implements Produto {

    private _nome: string;

    private _valor: number;

    private _editora: string;

    private _descricao: string;

    constructor(nome: string, valor: number, editora: string, descricao: string) {
        this._nome = nome;
        this._valor = valor;
        this._editora = editora;
        this._descricao = descricao;
    }

    get nome(): string {
        return this._nome;
    }

    set nome(value: string) {
        this._nome = value;
    }

    get valor(): number {
        return this._valor;
    }

    set valor(value: number) {
        this._valor = value;
    }

    get editora(): string {
        return this._editora;
    }

    set editora(value: string) {
        this._editora = value;
    }

    get descricao(): string {
        return this._descricao;
    }

    set descricao(value: string) {
        this._descricao = value;
    }
}
