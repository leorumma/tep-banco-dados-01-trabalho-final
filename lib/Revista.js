"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Revista = void 0;
class Revista {
    constructor(nome, valor, editora, descricao) {
        this._nome = nome;
        this._valor = valor;
        this._editora = editora;
        this._descricao = descricao;
    }
    get nome() {
        return this._nome;
    }
    set nome(value) {
        this._nome = value;
    }
    get valor() {
        return this._valor;
    }
    set valor(value) {
        this._valor = value;
    }
    get editora() {
        return this._editora;
    }
    set editora(value) {
        this._editora = value;
    }
    get descricao() {
        return this._descricao;
    }
    set descricao(value) {
        this._descricao = value;
    }
}
exports.Revista = Revista;
