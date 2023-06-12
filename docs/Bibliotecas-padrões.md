## Base do projeto

### Vite
[Site](https://vitejs.dev/)

Deverá ser a base para projetos novos.

> Tome cuidado com quando utilizar o `sourcemap: true` pois existe um [bug](https://github.com/vitejs/vite/issues/2433) 
> não resolvido no vite, siga a config abaixo para resolver.

<details>
  <summary>Ver Config</summary>

  1. No package.json adicione `max_old_space_size` antes do `vite build`:
  ```diff
  {
    "scripts": {
  -    "build": "vite build"
  +    "build": "NODE_OPTIONS=\"--max_old_space_size=8192\" vite build"
    }
  }
  ```
  
  2. Adicione as configurações a seguir.
  ```ts
    // vite.config.ts
  import { cpus } from 'os';
  import path from 'path';

  import { sentryVitePlugin } from '@sentry/vite-plugin';
  import react from '@vitejs/plugin-react-swc';
  import { defineConfig } from 'vite';
  import tsconfigPaths from 'vite-tsconfig-paths';

  export default defineConfig({
    server: { open: true },
    build: {
      sourcemap: true,
      rollupOptions: { // 1. Fix soucemap build
        maxParallelFileOps: Math.max(1, cpus().length - 1),
        output: {
          manualChunks: id => (id.includes('node_modules') ? 'vendor' : undefined),
          sourcemapIgnoreList: relativeSourcePath => path.normalize(relativeSourcePath).includes('node_modules')
        }
      }
    },
    plugins: [
      tsconfigPaths(),
      react(),
      sentryVitePlugin({
        org: 'tracers',
        project: 'tracers-front',
        authToken: process.env.SENTRY_AUTHTOKEN
      }),
      { // 2. Fix soucemap build
        name: 'sourcemap-exclude',
        transform(code: string, id: string) {
          return id.includes('node_modules') ? { code, map: { mappings: '' } } : undefined;
        }
      }
    ]
  });
  ```
</details>

### Webpack

Apenas em caso de microfrontend (ex. [MyEduzz Vertical](https://github.com/eduzz/myeduzz-vertical/wiki)).
Seguir os passos do projeto já existente.

## UI Componentes / Styles

* [AntD](https://ant.design/): Base de componentes prontos, foco mais para sistemas internos (MyEduzz, Nutro Producer e etc...).
* [Emotion](https://emotion.sh/docs/introduction): Biblioteca para estilização, possui a mesma sintax do `styled-component` mas com performance melhor.


## Gerenciador de Estado

Utilize eles para gerenciar o estado geral da aplicação e **NÃO** o estado de um componente/requisição 
(salvo em casos específicos que **TALVEZ** ele se faça necessário e o ContextAPI não seja aplicável)

Exemplos de uso:
* Usuário logado
* Configuração de tema


### Zustand (Recomendado)
[Site](https://github.com/pmndrs/zustand)

> Recomendado por ser mais simples e fácil de usar.

<details>
  <summary>Exemplo</summary>

```tsx
import { create } from 'zustand'

type Store = {
  count: number
  inc: () => void
}

const useStore = create<Store>()((set) => ({
  count: 1,
  inc: () => set((state) => ({ count: state.count + 1 })),
}));

function Counter() {
  const { count, inc } = useStore()

  return (
    <div>
      <span>{count}</span>
      <button onClick={inc}>one up</button>
    </div>
  )
}
```
</detail>

<details>
  <summary>Exemplo Avançado</summary>

```ts
import { create } from 'zustand';
import { combine, persist } from 'zustand/middleware';

const useAuthStore = create(
  persist( // persiste no localStorage
    combine( // Facilita o uso com o typescript
      {
        accessToken: null as string | null,
        refreshToken: null as string | null
      },
      (set, get) => ({
        isAuthenticated() {
          return !!get()?.accessToken;
        },
        currentUser() {
          const user = decodeToken(get()?.accessToken);
          if (!user) return null;

          return user;
        },
        setTokens(accessToken: string, refreshToken: string) {
          set({ accessToken, refreshToken });
        },
        clear() {
          set({ accessToken: null, refreshToken: null });
        }
      })
    ),
    { name: 'auth-storage' } // no do item no localstorage
  )
);

export default useAuthStore;

/// Componente
const user = useAuthStore(state => state.currentUser());
```
</details>

### Redux Toolkit

[Site](https://redux-toolkit.js.org/)

<details>
  <summary>Exemplo</summary>

```tsx
import { createSlice, configureStore, PayloadAction } from '@reduxjs/toolkit';

declare module 'react-redux' {
  export interface DefaultRootState extends RootState {}
}

export const authTokenSlice = createSlice({
  name: 'authToken',
  initialState: { value: localStorage.getItem('auth-token') ?? null },
  reducers: {
    set: (state, { payload: newToken }: PayloadAction<string>) => {
      localStorage.setItem('auth-token', newToken);
      state.value = newToken;
    },
    clear: state => {
      localStorage.removeItem('auth-token');
      state.value = null;
    }
  }
});

export const store = configureStore({
  reducer: {
    authToken: authTokenSlice.reducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const selectorIsAuthenticated = createSelector(
  (state: RootState) => state.authToken.value,
  token => !!token
);

// App.tsx
const App = memo(() => {
  return (
    <Provider store={store}>
      { /* -- your app */}
    </Provider>
  )
});
```
</details>

