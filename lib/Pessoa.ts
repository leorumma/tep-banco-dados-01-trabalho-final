export class Pessoa {

    constructor(nome: String, idade: Number, aniversario: String, identificador: String) {
        this.nome = nome;
        this.aniversario = aniversario;
        this.identificador = identificador;
        this.idade = idade;
    }

    private readonly nome: String;

    private aniversario: String;

    private identificador: String;

    private idade: Number;

}
