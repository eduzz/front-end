## Base
* [Vite](https://vitejs.dev): Utilizado como base para o desenvolvimento.
* Webpack: Utilizado apenas em casos de microfrontend, como o [MyEduzz Vertical](https://github.com/eduzz/myeduzz-vertical/wiki).
* [Next.js](https://nextjs.org): Utilizado em casos específicos onde o SSR é necessário.

## Ícones
* [Bootstrap](https://icons.getbootstrap.com).

## ESLint / Prettier
* [Houston Eslint](https://eduzz.github.io/houston/eslint-config/README): Aplica as configurações padrões do ESLint e Prettier.

## UI Componentes
* [AntD](https://ant.design/): Biblioteca de componentes prontos, mais adequada para sistemas internos, como MyEduzz, Nutro Producer, etc.
* [Mui/MaterialUI](https://mui.com/) (legado): Não deve ser utilizado em projetos novos.

## Estilização
* [Emotion](https://emotion.sh/docs/introduction): Biblioteca de estilização com sintaxe semelhante ao `styled-components`, porém com melhor performance.

## Gerenciador de Estados
* [Zustand](https://github.com/pmndrs/zustand): Gerenciador de estados simples e fácil de usar.
* [Redux toolkit](https://redux-toolkit.js.org) (legado): Não deve ser utilizado em projetos novos.

## Gerenciador de Requisições / Promises
* [Axios](https://axios-http.com/ptbr/): Biblioteca para requisições HTTP, utilizado em conjunto com `TanStack Query`.
* [TanStack Query](https://tanstack.com/query/v4/): Gerenciador de estados de requisições HTTP.
* [Houston Hooks/Promises](https://eduzz.github.io/houston/hooks/usePromise): Hooks simples para utilizar o estado de uma promise.

## Validação de Formulários
* [yup](https://github.com/jquense/yup): Biblioteca de validação com suporte a tipagem.
* [react-hook-form](https://www.react-hook-form.com): Deve ser utilizado em conjunto com yup ([resolver](https://www.npmjs.com/package/@hookform/resolvers#Yup)).

## Log de Erros
* [Sentry](https://docs.sentry.io/platforms/javascript/guides/react): Serviço de registro de logs de erros.

## Outros
* [date-fns](https://date-fns.org/): Biblioteca para manipulação de datas.
* [react-router](https://reactrouter.com/en/main): Router para o React.
