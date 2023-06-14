# Zustand
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