import {Livro} from "./lib/Livro";
import {LivroFisico} from "./lib/LivroFisico";
import {Autor} from "./lib/Autor";

export * from './lib/Pessoa';
export * from './lib/Autor';
export * from './lib/Produto';
export * from './lib/Livro';
export * from './lib/LivroFisico';
export * from './lib/MiniLivro';
export * from './lib/Ebook';
export * from './lib/Revista';

let autor:Autor = new Autor("nomeAutor", "123", "abc@abc.com", 22, "15/01/2000")
let livro:LivroFisico = new LivroFisico("livro1", 10, autor, "aaa", 1234);

livro.descricao = "a";

console.log(livro);

