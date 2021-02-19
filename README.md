# infoPharna

[![project name](https://img.shields.io/badge/UserZeca-ZecaFlix-red)](https://github.com/UserZeca)
[![project type](https://img.shields.io/badge/React-SPA-green)](https://www.devmedia.com.br/ja-ouviu-falar-em-single-page-applications/39009)
[![licence mit](https://img.shields.io/badge/licence-MIT-blue.svg)](https://github.com/UserZeca/ZecaFlix-front-end-react/blob/master/LICENSE)


## What was done?! /O que foi feito?!

+ **SPA** </br> 
    O projeto foi desenvolvido de forma que os componetes, se comportassem de maneira a aplicação se tornasse uma SPA.
    Para isso utilizei os recursos da lib **[react-router-dom](https://reactrouter.com/web/guides/quick-start)**. 

+ **Hooks** </br>
    [Hooks](https://pt-br.reactjs.org/docs/hooks-intro.html), um dos recursos padrões do React, permite a reutilizações de recursos, de uma forma mais simples. Reduzindo a necesssidade de criação de várias classes e métodos.
    E dentro do projeto, foi utilizado várias vezes, principalmente na criação dos formulários.

+ **Component styling/Estilização dos componentes** </br>
    A estilização dos componentes foi feita utilizando a lib **[styled-components](https://styled-components.com/)**, que permite armazenar "fragmentos" do jsx, dentro de constantes do JavaScript,
    o que permite dentro de outras coisas, manipular os componentes de uma forma mais simples e mais organizada.

+ **Visual Components/Componentes Visuais** </br>
   Durante o projeto foram criadas alguns componentes visuais específicos, que agregam bastante ao layout da página principal.
   - Carroussel </br>
       Esse componente se refere, a parte do layout que exibe a listagem na horizontal, de videos de uma categoria. Para desenvolve-lo foi utilizado a lib **[react-slick](https://react-slick.neostack.com/)**.
   - Banner </br>
      Esse componente se refere, a parte do layout que exibe um plano de fundo com a thumbnail do primeiro video da primeira categoria. Pra isso, o componente acessa a url referente ao video, e extraí essas informações.

+ **Forms/Formulários**
    Como já foi dito, os componentes que formam o formulários, utilizaram muito o recurso Hooks, criando até hooks constumizáveis. Mas além disso do Hooks,foi utilizado a lib **[PropTypes](https://pt-br.reactjs.org/docs/typechecking-with-proptypes.html)**, essa lib permite com que os elementos de armazenam dados no javascript, possam ser "tipadas", isso porque por padrão o javascript não tem uma tipagem forte, que às vezes é necessária, como no caso do formulário.  
   
+ **Repositories/Repositórios**
    Esse componente, é responsável pela ações que tomamos que requisitam do servidor alguma ação. Ele basicamente lida, com as requisições que fazemos ao json server. 

+ **Pages/Páginas**
    O projeto possui até o momento 4 páginas,home,página de cadastro de video, página de cadastro de categoria e erro 404. Todas essas páginas, também tiveram sua construção "componentizada".


## Available Scripts/ Scripts Disponíveis

> O projeto possui alguns comandos expecíficos, que permitem um controle de como queremos executar a aplicação.

### `npm start`

Especificamente nesse projeto npm start irá rodar nosso **json server**, na porta 8080. Porém não há a necessidade de utilizá-lo, já que hopedei o json server, 
na [Heroku](https://www.heroku.com/platform), e dentro dela esse comando será utilizado automáticamente. Mas caso queira rodar em sua máquina, siga os seguintes passos:<br />

+ Vá até a pasta config (src/config), e altere o valor da constante **URL_BACKEND**, para 'http://localhost:8080';
+ Rode o comando **npm start**, dentro da pasta raíz do projeto.
+ Abra [http://localhost:8080/categorias](http://localhost:8080/categorias) para visualizar o arquivo de das categorias;
+ Abra [http://localhost:8080/videos](http://localhost:8080/videos)  para visualizar o arquivo dos videos;

### `npm run devFrontEnd`

Esse comando roda nossa aplicação front end, na porta 3000. Caso queira realizá-lo, siga os seguintes passos:

+ Rode o comando **npm devFrontEnd**, dentro da pasta raíz do projeto; 
+ Abra [http://localhost:3000](http://localhost:3000) para visualizar o projeto;

## Versioning/Versionamento

Esse projeto não possui um sistema de versionamento.

## History/Histórico

Veja as [Releses](https://github.com/UserZeca/ZecaFlix-front-end-react/releases).


## License/Licença do Projeto

[MIT License](https://github.com/UserZeca/ZecaFlix-front-end-react/blob/master/LICENSE) © [UserZeca](https://github.com/UserZeca/ZecaFlix-front-end-react)
