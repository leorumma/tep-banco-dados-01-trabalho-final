import { Livro } from "./Livro";
import { Autor } from "./Autor";
export declare class Ebook extends Livro {
    private _assinaturaDigital;
    private _autor;
    private _descricao;
    private _isbn;
    constructor(nome: string, valor: number, assinaturaDigital: string, autor: Autor, descricao: string, isbn: string | number);
    get assinaturaDigital(): string;
    set assinaturaDigital(value: string);
    get autor(): Autor;
    set autor(value: Autor);
    get descricao(): string;
    set descricao(value: string);
    get isbn(): string | number;
    set isbn(value: string | number);
}
