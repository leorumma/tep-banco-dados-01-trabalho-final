import { Livro } from "./Livro";
import { Autor } from "./Autor";
export declare class MiniLivro extends Livro {
    private _autor;
    private _descricao;
    private _isbn;
    constructor(nome: string, valor: number, autor: Autor, descricao: string, isbn: string | number);
    get autor(): Autor;
    set autor(value: Autor);
    get descricao(): string;
    set descricao(value: string);
    get isbn(): string | number;
    set isbn(value: string | number);
}
