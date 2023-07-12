Lembre-se de que a estrutura de pastas pode variar dependendo do contexto da aplicação. 
Em alguns casos, pode haver a inclusão de pastas adicionais (`store/`, `redux/`, `contexts`, ...) 
devido ao uso de bibliotecas de gerenciamento de estados ou por conta das styles engines (`styled/`). 
No entanto, recomendamos que você siga essa linha de raciocínio.

A organização proposta fornece uma estrutura fácil e escalável. 
No entanto, é importante adaptar a estrutura de pastas de acordo com as necessidades específicas 
do seu projeto e no entendimento do time.

Sinta-se a vontade para sugerir mudanças na aba de [discussões](https://github.com/eduzz/front-end/discussions).

<p align="center">
<img width="332" alt="image" src="https://github.com/eduzz/front-end/assets/22228470/ed0f2278-3ab0-42fc-86df-03a147e0de6e">
</p>

### Uso correto das pastas

- `.vscode/`: Contém as configurações e extensões recomendadas para o projeto.
- `docker/`: Inclui os arquivos necessários para o uso do Docker (Dockerfile, nginx, ...).
- `public/`: Destinado aos arquivos públicos, como favicon e manifest (pode variar de acordo com o compiler: webpack, vite e cra).
- `src/`: Pasta de entrada para os arquivos.
	- `assets/`: Armazena imagens, fontes, temas da aplicação e outros recursos relacionados.
		- `theme/`: Contém as configurações específicas do tema, como emotion e antd.
	- `components/`
		- `globals/`: Agrupa os componentes de nível global, como Layout e Providers.
		- `shared/`: Engloba os componentes reutilizáveis, como Cards, Loaders e Empty States.
	- `helpers/`: Contém funções auxiliares, constantes, enums e outros utilitários.
	- `hooks/`: Armazena os hooks genéricos compartilhados.
	- `interfaces/`: Contém as interfaces compartilhadas.
	- `services/`: Camada de comunicação com a API de nível global (não obrigatório).
	- `pages/`: Responsável pelas páginas da aplicação.

### Dentro de um componente

Dentro de uma pasta de componente, separe as responsabilidades:

- `index.tsx`: Raiz do componente, que normalemente será a entrada da utilização.
- `service.ts`: Arquivo se negócio caso necessário deverá ficar junto do componente que o usa.
- `styles.css`: Arquivo de estilização se necessário.
- `useCustomHooks.tsx`: Caso o componente precise de um hook criado para ele mesmo coloque ele na mesma pasta (se não for utilizado por outro component).
- `ComponentFilhoSimples.tsx`: Component filho específico simples, sem componentes filhos.
- `ComponentFilhoComplexo(pasta)`: Component mais complexo com outros components filhos.
