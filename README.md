# Pokedex - FrontEnd

Este é um projeto de Pokedex desenvolvido como parte do curso "Desenvolvimento Frontend com Angular" oferecido pelo Banco Pan, ministrado pela Digital Innovation One (DIO). O projeto foi implementado utilizando JavaScript, HTML e CSS puro, sem a utilização do framework Angular.

## Visão Geral

A Pokedex consome dados da API PokeAPI para exibir informações sobre diferentes Pokémon. A interface permite visualizar a lista de Pokémon e carregar mais resultados dinamicamente com o botão "Load More".

## Como Usar

Para acessar a Pokedex, basta clicar no seguinte link: [Pokedex - FrontEnd](https://imkarmona.github.io/Pokedex-FrontEnd/)

### Funcionalidades

1. **Lista de Pokémon**: Ao acessar a Pokedex, você será apresentado a uma lista inicial de Pokémon, exibindo informações básicas sobre cada um.

2. **Load More**: Para carregar mais Pokémon, basta clicar no botão "Load More" localizado no final da lista. Isso trará mais resultados da API PokeAPI, expandindo a coleção.

## Desenvolvimento

Este projeto foi desenvolvido como parte do curso do Banco Pan, utilizando JavaScript para manipulação do DOM, HTML para estruturação e CSS para estilização.

### Estrutura do Projeto

- `index.html`: Contém a estrutura básica da página.

- `global.css`: Arquivo de estilo para estilização global, como o reset de margins e paddings por exemplo.
- `pokedex.css`: Arquivo de estilo para estilização da interface principal.

- `main.js`: Implementação do JavaScript de manipulação do DOM e funções de construção no HTML.
- `poke-api.js`: Implementação do JavaScript da API utilizada.
- `pokemon-model.js`: Conversão do modelo trazido pela API para um modelo próprio, para ser mais facil a utilização.

### API Utilizada

O projeto consome a [PokeAPI](https://pokeapi.co/), uma API aberta e gratuita que fornece informações detalhadas sobre Pokémon.

## Licença

Este projeto está sob a licença [MIT](LICENSE), que permite o uso livre e a distribuição do código.

---

**Nota:** Este projeto é uma aplicação de front-end pura, sem o uso do Angular. Para informações específicas sobre o curso ou para entender mais sobre a construção do projeto, consulte o material do curso fornecido pela Digital Innovation One.