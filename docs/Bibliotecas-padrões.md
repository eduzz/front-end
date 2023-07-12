## @Eduzz/UI
* [ui-tokens](https://github.com/eduzz/ui-tokens): Tokens bases de UI.
* [ui-layout](https://github.com/eduzz/ui-layout): Layout padrão.
* [ui-hooks](https://github.com/eduzz/ui-hooks): Hooks diversos.
* [ui-hooks-promises](https://github.com/eduzz/ui-hooks-promises): Hooks diversos de promises.
* [ui-hooks-query](https://github.com/eduzz/ui-hooks-query): Hooks diversos de react-query.
* [ui-hooks-rxjs](https://github.com/eduzz/ui-hooks-rxjs): Hooks diversos de rxjs.
* [ui-antd-theme](https://github.com/eduzz/ui-antd-theme): Tema base do antd.
* [ui-antd-hooks](https://github.com/eduzz/ui-antd-hooks): Hooks diversos do antd.
* [ui-antd-hooks-form](https://github.com/eduzz/ui-antd-hooks-form): Compoentes do antd com react-hooks-form.

## Base
* [Vite](https://vitejs.dev): Utilizado como base para o desenvolvimento.
* [Webpack](https://webpack.js.org/): Utilizado apenas em casos de microfrontend, como o [MyEduzz Vertical](https://github.com/eduzz/myeduzz-vertical/wiki).
* [Next.js](https://nextjs.org): Utilizado em casos específicos onde o SSR é necessário.

## Ícones
* [Bootstrap](https://react-icons.github.io/react-icons/icons?name=bs).

## ESLint / Prettier
* [Eduzz Eslint](https://github.com/eduzz/eslint-config): Aplica as configurações padrões do ESLint e Prettier.

## UI Componentes
* [AntD](https://ant.design/): Biblioteca de componentes prontos, mais adequada para sistemas internos, como MyEduzz, Nutro Producer, etc.
* [Mui/MaterialUI](https://mui.com/) (legado): Não deve ser utilizado em projetos novos.

## Estilização
* [Tailwind](https://tailwindcss.com/) (Recomendado):  Biblioteca de estilização através de classes pré-definidas.
* [Emotion](https://emotion.sh/docs/introduction): Biblioteca de estilização com sintaxe semelhante ao `styled-components`, porém com melhor performance.

## Gerenciador de Estados
* [Zustand](https://github.com/pmndrs/zustand) (Recomendado): Gerenciador de estados simples e fácil de usar.
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
