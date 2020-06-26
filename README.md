
<h1 align="center">
    <img alt="NextLevelWeek" title="#NextLevelWeek" src="./assets/banner.png" />
</h1>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/philipeperete/NextLevelWeek?color=%2304D361">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/philipeperete/NextLevelWeek">

  <a href="https://github.com/philipeperete/NextLevelWeek/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/philipeperete/NextLevelWeek">
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">

</p>

_________

## 💻 Sobre o projeto

♻️ Ecoleta - é uma forma de conectar empresas e entidades de coleta de resíduos orgânicos e inorgânicos as pessoas que precisam descartar seus resíduos de maneira ecológica.

As empresas ou entidades poderão se cadastrar na plataforma web enviando:
- Uma imagem do ponto de coleta,
- Nome da entidade, e-mail e WhatsApp,
- Endereço para que a empresa/entidade apareça no mapa e 
- Além de selecionar um ou mais ítens de coleta: 
  - Lâmpadas,
  - Pilhas e Baterias,
  - Papéis e Papelão,
  - Resíduos Eletrônicos,
  - Resíduos Orgânicos,
  - Óleo de Cozinha.

Os usuários terão acesso ao aplicativo móvel, onde poderão:
- Navegar pelo mapa para ver as instituições cadastradas,
- Entrar em contato com as empresas/entidades através do e-mail ou WhatsApp.

Projeto foi desenvolvido durante a **NLW - Next Level Week** oferecida pela [Rocketseat][rs] 🚀.

O NLW é uma experiência online com muito conteúdo prático, desafios e hacks onde o conteúdo fica disponível durante uma semana.

_________

## 🎨 Layout

O layout da aplicação está disponível no [Figma][figma].

_________

### 📱 Mobile

<p align="center">
  <img alt="NextLevelWeek" title="#NextLevelWeek" src="./assets/home-mobile.png" width="200px">
  <img alt="NextLevelWeek" title="#NextLevelWeek" src="./assets/detalhes-mobile.svg" width="200px">
  <br>
  <img alt="NextLevelWeek" title="#NextLevelWeek" src="./assets/mobile.gif" width="200px">
</p>

_________

### 💻 Web

<p align="center" style="display: flex; align-items: flex-start; justify-content: center;">
  <img alt="NextLevelWeek" title="#NextLevelWeek" src="./assets/web.svg" width="400px">
</p>

_________

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [Expo][expo]
- [Node.js][nodejs]
- [React][reactjs]
- [React Native][rn]
- [TypeScript][typescript]

_________

### 💡 Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js][nodejs]. 
Além disto é bom ter um editor para trabalhar com o código como [VSCode][vscode].

_________

## 🚀 Como executar o projeto

Podemos considerar este projeto como sendo divido em três partes:
1. Back end (pasta server) .
2. Front end (pasta web).
3. Mobile (pasta mobile).

⚠️ Tanto o Front end quanto o Mobile precisam que o Back end esteja sendo executado para funcionar.

_________

### ⚽ Rodando o Back end (Servidor)

```bash
# Clone este repositório.
$ git clone https://github.com/philipeperete/NextLevelWeek

# Acesse a pasta do projeto no terminal/cmd.
$ cd ecoleta

# Vá para a pasta server.
$ cd server

# Adicione a variável API_URL com seu ip - ex.: 192.168.15.5:3333, caso queira rodar junto com a aplicação mobile no expo. Caso contrário, ele rodará por padrão no endereço http://localhost:3333
$ echo "API_URL=http://<seu_ip>:3333" > .env

# Instale as dependências.
$ npm install

# Execute a aplicação em modo de desenvolvimento.
$ npm run dev

# O servidor inciará na porta:3333 - acesse http://localhost:3333 
```
_________

### ⚽ Rodando a aplicação web (Front end)

```bash
# Clone este repositório.
$ git clone https://github.com/philipeperete/NextLevelWeek

# Acesse a pasta do projeto no seu terminal/cmd.
$ cd ecoleta

# Vá para a pasta da aplicação Front end.
$ cd web

# Instale as dependências.
$ npm install

# Adicione a variável API_URL com seu ip - ex.: 192.168.15.5:3333, caso queira rodar junto com a aplicação mobile no expo. Caso contrário, ele rodará por padrão no endereço http://localhost:3333
$ echo "API_URL=http://<seu_ip>:3333" > .env

# Execute a aplicação em modo de desenvolvimento.
$ npm run start

# A aplicação será aberta na porta:3000 - acesse http://localhost:3000
```
_________

## 📝 Licença

Este projeto esta sobe a licença MIT.
Para mais detalhes, acesse [license](LICENSE).

_________

Agradecimentos [Rocketseat][rs] 🚀.

* Twitter: [Philipe Perete](https://twitter.com/PhilipePerete).
* Linkedin: [Philipe Perete](https://www.linkedin.com/in/philipe-perete-b76622104/).
* Github: [Philipe Perete](https://github.com/philipeperete).

Feito com 💙 por **Philipe Perete** 👻.

[nodejs]: https://nodejs.org/
[typescript]: https://www.typescriptlang.org/
[expo]: https://expo.io/
[reactjs]: https://reactjs.org
[rn]: https://reactnative.dev/ 
[vscode]: https://code.visualstudio.com/  
[rs]: https://rocketseat.com.br
[figma]: https://www.figma.com/file/Byw4X5etg8VCmezueyhzkC/Ecoleta-(Starter)?node-id=136%3A546
