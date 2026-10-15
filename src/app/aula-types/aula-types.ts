import { Component } from '@angular/core';

interface Post {
  id: number;
  titulo: string;
  conteudo: string;
  autor: string;
  data: Date;
}

type Admin = { nome: string; nivel: number};
type User = { email: string};
type AdminUser = Admin & User;


@Component({
  imports: [],
  selector: 'app-aula-types',
  styleUrl: './aula-types.css',
  templateUrl: './aula-types.html',
})

export class AulaTypes {
  post: Post = {
    id: 1,
    titulo: "Meu primeiro post",
    conteudo:"Este é o conteúdo do post...",
    autor: "Ana",
    data: new Date()
  };

posts: Post[] = [
  {
    id: 1,
    titulo: "Angular é mais ou menos incrível",
    conteudo: "Pelo amor de deus alguém me dá um papel",
    autor: "Lauren sz",
    data: new Date("2026-09-23")
  },
  {
    id: 2,
    titulo: "TypeScript blá blá blá",
    conteudo: "blá blá blá blá blá blá",
    autor: "Lauren sz",
    data: new Date("2026-09-23")
  }
  
]
 user: AdminUser = {
  nome:"Lauriene",
  nivel: 5,
  email: "teste@teste.com.br"
 }

 //any: compila sempre, pode quebrar em runtime
 valorAny: any = 123;

 //unknown: precisa de narrowing antes de usar
 valorUnknown: unknown = 'texto';

 //campo só para digitação no exemplo
 entrada = '';

setAny () {
// pode receber qualquer coisa
  this.valorAny = this.entrada; // string, number, etc.
}

setUnknown() {
// continua unknown, mas você pode guardar qualquer coisa
// (vamos guardar string ou number conforme a entrada)
  const n = Number(this.entrada);
  this.valorUnknown = isNaN(n) ? this.entrada : n;
}

// Narrowing seguro para unknown
toUpperIfString(v: unknown): string | null {
 return (typeof v === 'string')? v. toUpperCase() : null;
}

//never: função que nunca retorna (lança erro)
falhar(msg: string): never {
  throw new Error(msg);
}

}


