# Geral

## Base

* [Vite](https://vitejs.dev/): Deverá ser a base para projetos novos.
* Webpack: Apenas em caso de microfrontend (ex. [MyEduzz Vertical](https://github.com/eduzz/myeduzz-vertical/wiki)).
  Seguir os passos do projeto já existente.
* [NextJs](https://nextjs.org/): Apenas em casos específicos aonde o `SSR` se faz necessário.

## ESLint

* [Houston Eslint](https://eduzz.github.io/houston/eslint-config/README): Aplica as configurações padrões da Eduzz.

## UI Componentes / Styles

* [AntD](https://ant.design/): Base de componentes prontos, foco mais para sistemas internos (MyEduzz, Nutro Producer e etc...).
* [Emotion](https://emotion.sh/docs/introduction): Biblioteca para estilização, possui a mesma sintax do `styled-component` mas com performance melhor.
* [Mui/MaterialUI](https://mui.com/)(`legado`): Não utilizar mais em projetos novos. 

## Gerenciador de Estados

* [zustand](https://github.com/pmndrs/zustand): Gerenciador de estados simples e fácil de usar.
* [redux-toolkit](https://redux-toolkit.js.org/)(`legado`): Não utilizar mais em projetos novos. 

## Gerenciador de Requisição / Promises

* [axios](https://axios-http.com/ptbr/): Base de requisições http, usar em conjunto do `TanStack Query`.
* [TanStack Query](https://tanstack.com/query/v4/): Gerenciador de estados de requisição http.
* [Houston Hooks/Promises](https://eduzz.github.io/houston/hooks/usePromise): Hooks simples para utilizar o estado de uma promise.

## Validação de formuários

* [yup](https://github.com/jquense/yup): Schema de validação com tipagem.
* [react-hook-form](https://www.react-hook-form.com/): Deve ser utilizado em conjunto do yup ([resolver](https://www.npmjs.com/package/@hookform/resolvers#Yup)).

## Log de Erros

* [Sentry](https://docs.sentry.io/platforms/javascript/guides/react/): Serviço de logs padrão.

## Outros

* [date-fns](https://date-fns.org/): Manipulador de datas.
* [react-router](https://reactrouter.com/en/main): Router para o react.