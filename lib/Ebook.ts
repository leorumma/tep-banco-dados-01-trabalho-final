import {Livro} from "./Livro";
import {Autor} from "./Autor";

export class Ebook extends Livro {

    private _assinaturaDigital: string;

    private _autor: Autor;

    private _descricao: string;

    private _isbn: string | number;

    constructor(nome: string, valor: number, assinaturaDigital: string, autor: Autor, descricao: string, isbn: string | number) {
        super(nome, valor);
        this._assinaturaDigital = assinaturaDigital;
        this._autor = autor;
        this._descricao = descricao;
        this._isbn = isbn;
    }

    get assinaturaDigital(): string {
        return this._assinaturaDigital;
    }

    set assinaturaDigital(value: string) {
        this._assinaturaDigital = value;
    }

    get autor(): Autor {
        return this._autor;
    }

    set autor(value: Autor) {
        this._autor = value;
    }

    get descricao(): string {
        return this._descricao;
    }

    set descricao(value: string) {
        this._descricao = value;
    }

    get isbn(): string | number {
        return this._isbn;
    }

    set isbn(value: string | number) {
        this._isbn = value;
    }
}
