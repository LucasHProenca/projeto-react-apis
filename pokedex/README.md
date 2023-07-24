<div align="center">
<img src="https://github.com/LucasHProenca/projeto-react-apis/assets/106993403/a1e35e76-ae38-4ec1-9f8c-0044a92c9ef7" alt="" />
</div>

---

<p align="center">
 <a href="#-sobre-o-projeto">Sobre</a> •
 <a href="#-funcionalidades">Funcionalidades</a> •
 <a href="#-como-executar">Como executar</a> • 
 <a href="#-tecnologias">Tecnologias</a> • 
 <a href="#-autor">Autor</a> • 
</p>

## 💻 Sobre o projeto 

![pokeball](https://cdn.emojidex.com/emoji/mdpi/pokeball.png "pokeball") Pokédex - Essa API foi desenvolvida como um facilitador para cadastrar produtos e clientes para a loja Toy Star, que é um e-commerce personalizado de brinquedos da franquia Star Wars, com isso, oferecemos produtos em todas as faixas de preço e gosto, visando atender desde o pequeno fã até o colecionador fanático.
Porém, não é restrita a apenas o uso da nossa loja, uma vez que é possível cadastrar seus próprios produtos e clientes, assim como organizar e cancelar pedidos de quaisquer seguimentos.

Projeto desenvolvido durante o **Bootcamp Web Full-Stack** da [Labenu](https://www.labenu.com.br/curso-de-programacao-web-full-stack-integral).
Esse bootcamp é uma experiência online é um programa com mais de 1000 horas de experiência prática em desenvolvimento Full-stack e projetos individuais.

---

A Pokédex foi desenvolvida com a finalidade de trazer de volta um pequeno gosto de infância, devido a isso, 
temos disponíveis todos os 151 pokémons da região de Kanto para integrar a sua pokédex. Venha nos visitar e torne-se um mestre pokémon!

A parte inicial do projeto foi realizada pensando em telas maiores que 1570 pixels até um máximo de 1920 pixels.
Tendo em vista atender ao máximo de dispositivos possíveis, também foram adicionadas diversas outras formatações, para telas intermediárias, entre 481 e 800 pixels de largura para tablets e entre 320 até 480 pixels de largura para celulares smartphones android.

Este projeto conta com um código mais limpo e direto, uma vez que todas as modificações que ocorrem no layout do website com as trocas de tela são feitas considerando o caminho que o usuário se encontra no momento, por exemplo:
Inicialmente o usuário se encontra na página inicial com 151 pokémons disponíveis para captura, contudo, ao capturar um deles, ou acessar a pokédex pelo botão localizado no cabeçalho, havéra uma mudança na rota do site, indicando para o código que alterações precisam ser feitas no layout, portanto, a lista de pokémons capturados é renderizada e ficará disponível para o usuário (caso ele tenha capturado algum pokémon), o card do mesmo sofre alterações mostrando no lugar da opção de capturar, onde temos a possibilidade de exclusão do mesmo, fazendo com que ele retorne a página inicial. 

Trazemos também duas outras páginas, a de detalhes do pokémon, onde é possível acessa-la clicando em "Detalhes" dentro do card do mesmo, e isso o redirecionará novamente para um local que conta com fotografias do pokémon de frente e de costa, um retrato do mesmo no canto superior direito, assim como cada um dos seus atributos, seja ataque, defesa, ou etc, contando com barras de poder que mudam de cor de acordo com o quão forte ou não o pokémon é. Também temos alguns de seus movimentos mais básicos mostrados ao lado.

A outra pagina é a de perfil, que fica disponível quando o nome de qualquer pokémon é clicado, esta página se assemelha bastante ao layout da de detalhes, contudo, as semelhanças param por aí. Devido à diversos fatos, desde o retrato do pokémon que é por sua vez de uma outra versão do jogo, algo mais "cartoonizado", contamos também com as informações básicas como peso e altura, também trouxemos alguns dos ataques mais fortes de cada um deles, e uma pequena animação das versões shiny (brilhantes), para mostrar ao usuário que ele também poderá se deparar com essas variações nos jogos atuais de Pokémon.

Gostaria de ressaltar que, o cabeçalho também sofre alterações de acordo com a página em que o usuário se encontra, e um ponto especial é que, se o mesmo estiver em "Detalhes" ou no "Perfil", teremos duas possibilidades:
Na primeira, caso o pokémon se encontre na lista inicial, ou seja, na página home, poderemos ver um botão de adicionar localizado no lado direito do cabeçalho. Na outra possibilidade, o pokémon estará contido na pokédex, então o mesmo botão mudará de cor, e sua função agora fará com que ele volte para a lista inicial, caso seja clicado.

Outros pontos importantes a serem ressaltados são: Primeiramente, ao capturar ou excluir um pokémon uma janela se abre, indicando para o usuário uma mensagem de que a ação obteve êxito.
Também foi adicionado um filtro a página inicial e a pokédex, onde é possível procurar pokémons de acordo com o nome, e assim que o mesmo é capturado ou excluído o campo de filtro é limpo, podendo o usuário iniciar uma nova busca.

Pessoalmente falando, a prioridade para este trabalho foi em desenvolver corretamente a API, trazendo um layout limpo e adaptável e, fazer funções que não permitissem ao usuário ter o mesmo pokémon tanto na lista inicial quanto em sua pokédex, poís assim como nos jogos mais antigos, não havia uma razão para se capturar mais do que um do mesmo, sendo assim, eles eram considerados por mim e por muitos outros jogadores como sendo únicos, e duplica-los tirária um pouco desse sentimento.

Todo o projeto foi desenvolvido através da PokéAPI disponível em: https://pokeapi.co/

Tecnologias utilizadas: React Hooks(useState, Effect, Location e Context), Styled-Components, Chakra-UI, API

Link do Surge: https://pokedex-lucashp.surge.sh/

Print das telas:

Desktop - https://imgur.com/a/wPilrVH

Mobile - https://imgur.com/a/GQI4Pmb

<!-- # Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify) -->

