# NLW Valoriza

Backend de um sistema de tags. Um usuário pode avaliar outro usuário com tags e mensagens.

Stack utilizada: NodeJS.
Linguagem utilizada: TypeScript

Bibliotecas instaladas:
  - bcryptjs

  - class-transformer

  - express

  - express-async-errors

  - jsonwebtoken

  - reflect-metadata

  - sqlite3

  - typeorm
  
  - uuid

## Regras/Objetivos

- Cadastro de usuários:

  [x] Não é permitido cadastrar mais de um usuário com o mesmo e-mail;

  [x] Não é permitido cadastrar usuário sem e-mail;

- Cadastro de TAG:
  
  [x] Não é permitido cadastrar TAG sem nome;
  
  [x] Não é permitido cadastrar mais de uma TAG com o mesmo nome;

  [x] Não é permitido o cadastro por usuário que não sejam administradores;

- Cadastro de elogios:

  [x] Não é permitido um usuário cadastrar um elogio para si;

  [x] Não é permitido cadastrar elogios para usuários inválidos;

  [x] O usuário deverá estar autenticado na aplicação para cadastrar elogios;

- Listagens:

  [x] Listar elogios enviados pelo usuário autenticado;

  [x] Listar elogios recebidos pelo usuário autenticado;

  [x] Listar todas as tags cadastradas;

  [x] Criar um nome personalizado para as tags (Ex.: #NOME). Utilizei a biblioteca class-transformer;

  [x] Listar todos os usuários cadastrados;

  [x] Fazer com que a lista de usuários não exiba a senha dos outros usuários;

- To-do list:

  [ ] Quando um usuário receber um elogio, ser notificado via e-mail.

  [ ] Buscar tags por nome

  [ ] Buscar usuários por nome

  [ ] Criar um front-end para testar a api (cors);