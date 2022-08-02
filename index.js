"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
const LivroFisico_1 = require("./lib/LivroFisico");
const Autor_1 = require("./lib/Autor");
__exportStar(require("./lib/Pessoa"), exports);
__exportStar(require("./lib/Autor"), exports);
__exportStar(require("./lib/Produto"), exports);
__exportStar(require("./lib/Livro"), exports);
__exportStar(require("./lib/LivroFisico"), exports);
__exportStar(require("./lib/MiniLivro"), exports);
__exportStar(require("./lib/Ebook"), exports);
__exportStar(require("./lib/Revista"), exports);
let autor = new Autor_1.Autor("nomeAutor", "123", "abc@abc.com", 22, "15/01/2000");
let livro = new LivroFisico_1.LivroFisico("livro1", 10, autor, "aaa", 1234);
livro.descricao = "a";
console.log(livro);
