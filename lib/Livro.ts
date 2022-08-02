import {Produto} from "./Produto";
import {Autor} from "./Autor";

export abstract class Livro implements Produto {

    public nome: string;

    public valor: number;

    public abstract descricao: string;

    public abstract isbn: string | number;

    public abstract autor: Autor;

    protected constructor(nome: string, valor: number) {
        this.nome = nome;
        this.valor = valor;
    }


}
