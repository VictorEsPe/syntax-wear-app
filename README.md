# 👕 Syntax Wear

O **Syntax Wear** é uma aplicação web de e-commerce moderna desenvolvida em React, TypeScript e Tailwind CSS v4, com foco em uma experiência de usuário premium para compras online de vestuário e acessórios voltados para o público geek/desenvolvedor.

O projeto utiliza **TanStack React Router** para um sistema de rotas robusto, baseado em arquivos, e **React Hook Form** integrado com **Zod** para validação estática e dinâmica de formulários (Login, Cadastro e CEP).

---

## 🚀 Tecnologias Utilizadas

A stack de tecnologia do projeto conta com ferramentas modernas do ecossistema front-end:

*   **[React 19](https://react.dev/)** - Biblioteca principal para construção da interface.
*   **[TypeScript](https://www.typescriptlang.org/)** - Tipagem estática para maior segurança e produtividade.
*   **[Vite 8](https://vite.dev/)** - Build tool ultrarrápido para desenvolvimento moderno.
*   **[Tailwind CSS v4](https://tailwindcss.com/)** - Estilização moderna e utilitária com o novo compilador de alta performance.
*   **[TanStack React Router](https://tanstack.com/router/latest)** - Roteador type-safe baseado em arquivos.
*   **[React Hook Form](https://react-hook-form.com/)** - Gerenciamento performático de estados de formulários.
*   **[Zod](https://zod.dev/)** - Validação de esquemas de dados de forma declarativa.
*   **[React Icons](https://react-icons.github.io/react-icons/)** - Conjunto de ícones personalizáveis para a interface.

---

## 📦 Estrutura de Diretórios

A estrutura do projeto está organizada de forma modular e escalável:

```text
src/
├── assets/          # Imagens, fontes e recursos estáticos
├── components/      # Componentes reutilizáveis da interface
│   ├── Button/      # Botão personalizado com variantes
│   ├── CEPForm/     # Formulário de cálculo de frete por CEP
│   ├── CartDrawer/  # Drawer/Menu lateral do carrinho de compras
│   ├── Header/      # Cabeçalho da aplicação com links e ícone de carrinho
│   ├── Hero/        # Banner principal de destaque
│   ├── LoginForm/   # Formulário de login com validações
│   ├── ProductCard/ # Card de exibição do produto
│   └── footer/      # Rodapé completo da página
│   └── ... e outros componentes modulares
├── contexts/        # Provedores de estado global (ex: Carrinho de Compras)
│   ├── CartContext.tsx
│   └── CartProvider.tsx
├── interfaces/      # Interfaces de tipos globais
├── mocks/           # Dados fictícios para simular APIs (Categorias, Produtos)
├── pages/           # Páginas e árvore de rotas (TanStack Router)
│   ├── __root.tsx   # Componente raiz global da aplicação
│   ├── _app/        # Páginas acessíveis com o layout principal da aplicação
│   │   ├── layout.tsx
│   │   ├── index.tsx (Página Inicial / Home)
│   │   ├── about/
│   │   ├── our-stores/
│   │   └── products/
│   └── _auth/       # Páginas de autenticação (Sign In / Sign Up)
├── styles/          # Arquivos de estilização global (globals.css)
├── utils/           # Funções utilitárias (formatador de moeda, validador de CPF, etc.)
├── App.tsx          # Ponto de inicialização do Router
└── main.tsx         # Ponto de entrada do React
```

---

## 🛠️ Funcionalidades Principais

*   **Visualização de Produtos:** Listagem dinâmica filtrada por categorias (mocks).
*   **Carrinho de Compras:** Adicionar, remover e gerenciar quantidades de produtos em um drawer lateral reativo usando React Context.
*   **Rotas Protegidas e Agrupadas:** Divisão clara entre rotas administrativas/app (`_app`) e de autenticação (`_auth`) usando TanStack Router.
*   **Formulários Validados:** Formulários de autenticação e preenchimento de endereço com tratamento de erro em tempo real via Zod e React Hook Form.
*   **Cálculo de CEP:** Simulação de frete integrada.

---

## ⚙️ Como Executar o Projeto

Siga os passos abaixo para rodar o projeto localmente em seu computador:

### Pré-requisitos
*   [Node.js](https://nodejs.org/) (versão LTS recomendada)
*   Gerenciador de pacotes NPM (instalado por padrão com o Node)

### 1. Instalar as Dependências
Execute o comando abaixo na pasta raiz do projeto:
```bash
npm install
```

### 2. Rodar em Ambiente de Desenvolvimento
Para iniciar o servidor de desenvolvimento local:
```bash
npm run dev
```
O console exibirá o endereço local (geralmente `http://localhost:5173/`).

### 3. Compilar para Produção
Para gerar a versão otimizada para produção:
```bash
npm run build
```
Os arquivos de produção serão gerados na pasta `dist/`.

### 4. Visualizar o Build de Produção Localmente
Para rodar localmente a versão compilada na pasta `dist`:
```bash
npm run preview
```

---

## 📝 Scripts Disponíveis

No arquivo [package.json](file:///C:/Users/victo/OneDrive/Desktop/Victor/Coding/DevQuest/Exerc%C3%ADcios/syntax-wear-app/package.json), você encontrará os seguintes scripts:

*   `npm run dev` - Executa o servidor de desenvolvimento com Hot Module Replacement (HMR).
*   `npm run build` - Roda o verificador de tipos TypeScript (`tsc`) e compila o projeto usando o Vite.
*   `npm run lint` - Analisa o código em busca de erros de sintaxe e padrões inconsistentes utilizando o ESLint.
*   `npm run preview` - Inicia um servidor web local para testar a build de produção.
