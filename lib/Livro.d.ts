import { Produto } from "./Produto";
import { Autor } from "./Autor";
export declare abstract class Livro implements Produto {
    nome: string;
    valor: number;
    abstract descricao: string;
    abstract isbn: string | number;
    abstract autor: Autor;
    protected constructor(nome: string, valor: number);
}
