
### Estrutura de pastas padrão

Lembre-se de que a estrutura de pastas pode variar dependendo do contexto da aplicação. Em alguns casos, pode haver a inclusão de pastas adicionais (`store/`, `redux/`, `contexts`, ...) devido ao uso de bibliotecas de gerenciamento de estados ou por conta das styles engines (`styled/`). No entanto, recomendamos que você siga essa linha de raciocínio.

A organização proposta fornece uma estrutura fácil e escalável. No entanto, é importante adaptar a estrutura de pastas de acordo com as necessidades específicas do seu projeto e no entendimento do time.

Sinta-se a vontade para sugerir mudanças na aba de [discussões](https://github.com/eduzz/front-end/discussions).

<p align="center">

<img width="383" alt="Arquitetura padrão" src="https://github.com/eduzz/front-end/assets/22228470/0daa026d-e8f5-44be-ba7d-634a62cf3d69">
</p>

### Uso correto das pastas

- `.vscode/`: Contém as configurações e extensões recomendadas para o projeto.
- `docker/`: Inclui os arquivos necessários para o uso do Docker (Dockerfile, nginx, ...).
- `public/`: Destinado aos arquivos públicos, como favicon e manifest.
- `assets/`: Armazena imagens, fontes, temas da aplicação e outros recursos relacionados.
	- `theme/`: Contém as configurações específicas do tema, como emotion e antd.
- `components/`
	- `globals/`: Agrupa os componentes de nível global, como Layout e Providers.
	- `shared/`: Engloba os componentes reutilizáveis, como Cards, Loaders e Empty States.
-  `declarations/`: Inclui declarações e alterações de tipagem.
- `helpers/`: Contém funções auxiliares, constantes, enums e outros utilitários.
- `hooks/`: Armazena os hooks genéricos compartilhados.
- `interfaces/`: Contém as interfaces compartilhadas.
- `pages/`: Responsável pelas páginas da aplicação.
	- `private/`: Compreende as páginas que exigem autenticação do usuário no sistema.
	- `public/`: Engloba as páginas públicas, como página não encontrada, sem acesso e autenticação.
- `services/`: Camada de comunicação com a API.

