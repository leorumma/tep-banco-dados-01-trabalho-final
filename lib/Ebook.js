"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ebook = void 0;
const Livro_1 = require("./Livro");
class Ebook extends Livro_1.Livro {
    constructor(nome, valor, assinaturaDigital, autor, descricao, isbn) {
        super(nome, valor);
        this._assinaturaDigital = assinaturaDigital;
        this._autor = autor;
        this._descricao = descricao;
        this._isbn = isbn;
    }
    get assinaturaDigital() {
        return this._assinaturaDigital;
    }
    set assinaturaDigital(value) {
        this._assinaturaDigital = value;
    }
    get autor() {
        return this._autor;
    }
    set autor(value) {
        this._autor = value;
    }
    get descricao() {
        return this._descricao;
    }
    set descricao(value) {
        this._descricao = value;
    }
    get isbn() {
        return this._isbn;
    }
    set isbn(value) {
        this._isbn = value;
    }
}
exports.Ebook = Ebook;
