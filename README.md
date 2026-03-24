# ⚡ Pokedex React

Uma aplicação web interativa para listar e visualizar Pokémons, consumindo dados da [PokéAPI](https://pokeapi.co/). 

Este projeto nasceu como uma aplicação em JavaScript Puro (Vanilla JS) e foi **totalmente refatorado para React**, modernizando a arquitetura, gerenciamento de estado e melhorando a performance de renderização.

## ✨ Funcionalidades

* **Listagem Dinâmica:** Carrega os primeiros 151 Pokémons (Geração 1) de forma assíncrona.
* **Paginação Inteligente:** Botão "Load More" para carregar os próximos Pokémons sob demanda, sem travar a tela.
* **Consumo de API em Cascata:** Utiliza `Promise.all` e `async/await` para buscar a lista inicial e, em seguida, buscar os detalhes (fotos e tipos) de cada Pokémon simultaneamente.
* **Design Baseado em Tipos:** O fundo de cada "Card" de Pokémon muda dinamicamente com base no seu tipo principal (ex: verde para Grama, vermelho para Fogo).

## 🚀 Tecnologias e Conceitos Utilizados

* **React (Vite):** Biblioteca principal para construção da interface de usuário baseada em componentes.
* **React Hooks:**
  * `useState`: Para gerenciar a lista de pokémons e o controle de paginação.
  * `useEffect`: Para buscar os dados iniciais assim que o aplicativo é montado na tela.
  * `useCallback`: Para otimizar as funções de chamada da API e evitar loops de renderização (cascading renders).
* **JavaScript (ES6+):** Uso intenso de Desestruturação de Arrays, Arrow Functions e Template Literals.
* **CSS3:** Estilização global e classes dinâmicas.

## 📁 Estrutura do Projeto

A lógica principal foi dividida para manter o código limpo e modular:

* `api.js`: Concentra toda a regra de negócio e chamadas de rede (fetch) para a PokéAPI.
* `PokemonCard.jsx`: Componente visual responsável por desenhar um único Pokémon na tela.
* `App.jsx`: Componente principal que gerencia o estado da lista e a paginação.

## 🛠️ Como rodar o projeto localmente

Siga os passos abaixo para testar a Pokedex na sua máquina:

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/YannGui1/Projeto_ListagemPokemons.git
2. **Acesse a pasta do projeto:**
   ```bash
   cd NOME_DO_REPOSITORIO
3. **Instale as dependências:**
    O projeto utiliza o Vite como ferramenta de build. Instale os pacotes necessários via NPM:
   ```bash
   npm install
4. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
5. **Abra no navegador:**
  O terminal exibirá um link local (geralmente http://localhost:5173/). Clique nele para ver a mágica acontecer!
