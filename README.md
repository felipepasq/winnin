# Projeto Desafio Winnin

Este repositório contém a solução para o desafio técnico proposto pela empresa Winnin. O objetivo principal era consumir a API do subreddit de React, permitindo alternar entre as categorias hot, rising e new, usando botões específicos para cada uma dessas categorias. Além disso, um botão de "carregar mais" foi adicionado para exibir mais posts.

## Tecnologias Utilizadas

Este projeto foi desenvolvido com as seguintes tecnologias:

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Axios](https://github.com/axios/axios)
- [Jest](https://jestjs.io/)
- [React Router DOM](https://reactrouter.com/web/guides/quick-start)
- [Zustand](https://github.com/pmndrs/zustand)
- [Styled-components](https://styled-components.com/)

## Instalação

- Clone este repositório
- Execute o comando `yarn` para instalar as dependências
- Execute o comando `yarn dev` para iniciar a aplicação

## Testes

Para executar os testes, execute o comando `yarn test`. Isso irá rodar os testes unitários utilizando o Jest e o React Testing Library.

## Observações

A rota da categoria hot retorna um elemento a mais por conta do reddit fixar um post principal. No entanto na implementação a chamada está sendo feita de forma correta.