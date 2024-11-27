# 🌐 Site Uniesp - Portal de Notícias e Administração

Este projeto é uma aplicação web desenvolvida em **React.js** com funcionalidades voltadas para exibição de notícias, administração de conteúdo e informações institucionais da Uniesp. O projeto utiliza bibliotecas modernas, como **Material-UI** e **JSON Server**, para criar uma experiência rica e dinâmica.

---

## 🛠️ Funcionalidades
- **Portal de Notícias**:
  - Listagem de notícias com imagem, título e link para mais detalhes.
  - Visualização completa de uma notícia selecionada.
- **Área Administrativa**:
  - Cadastro, edição e exclusão de notícias.
  - Sistema gerenciado com base no JSON Server como backend simulado.
- **Design Responsivo**:
  - Interface adaptada para diferentes dispositivos, utilizando Material-UI.
- **Informações Institucionais**:
  - Páginas sobre a faculdade e política de privacidade.

---

## 🗂️ Estrutura do Projeto

A organização das pastas foi planejada para separar claramente os componentes reutilizáveis, as páginas e os recursos estáticos.

### Estrutura de Pastas
```plaintext
site_uniesp/
├── data/
│   └── db.json                # Banco de dados simulado para notícias
│
├── public/
│   ├── noticias/              # Imagens usadas nas notícias
│   │   ├── image1.jpeg
│   │   ├── image2.jpeg
│   │   ├── image3.avif
│   │   └── ...
│   └── index.html             # HTML base para a aplicação React
│
├── src/
│   ├── assets/                # Recursos estáticos adicionais
│   │   └── ...
│   │
│   ├── components/            # Componentes reutilizáveis
│   │   ├── BannerAd.jsx       # Componente de banner publicitário
│   │   └── Navbar.jsx         # Barra de navegação
│   │
│   ├── pages/                 # Páginas principais da aplicação
│   │   ├── admin/             # Área administrativa
│   │   │   ├── AdminNoticias.jsx  # Página principal de administração
│   │   │   ├── CadastroNoticia.jsx # Formulário de cadastro de notícias
│   │   │   ├── EditarNoticia.jsx   # Página para editar notícias existentes
│   │   │   └── ...
│   │   ├── DpoLgpd.jsx        # Página sobre a política de privacidade
│   │   ├── Faculdade.jsx      # Página com informações da faculdade
│   │   ├── Inicial.jsx        # Página inicial
│   │   ├── Noticias.jsx       # Página de listagem de notícias
│   │   └── VisualizaNoticia.jsx # Página para detalhes de uma notícia
│   │
│   ├── App.css                # Estilos globais da aplicação
│   ├── App.jsx                # Componente principal da aplicação
│   ├── config.js              # Configurações globais (ex.: URL da API)
│   ├── index.css              # Estilos base
│   ├── index.js               # Ponto de entrada do React
│   └── main.jsx               # Inicialização da aplicação
│
├── package.json               # Dependências e scripts do projeto
└── README.md                  # Documentação do projeto
```

---

## 📋 Explicação dos Arquivos e Objetivos

### Diretório `data`
- **db.json**: Simula um backend com as notícias, utilizado para operações CRUD no ambiente de desenvolvimento.

### Diretório `public`
- Contém os arquivos estáticos, como imagens das notícias e o arquivo `index.html`, que serve de base para a aplicação React.

### Diretório `src`
#### **`components/`**
- **BannerAd.jsx**: Exibe banners publicitários na interface.
- **Navbar.jsx**: Componente de navegação presente em todas as páginas.

#### **`pages/`**
- **admin/**: Contém páginas administrativas:
  - **AdminNoticias.jsx**: Página principal para gerenciamento de notícias.
  - **CadastroNoticia.jsx**: Formulário para criar novas notícias.
  - **EditarNoticia.jsx**: Página para editar notícias existentes.
- **DpoLgpd.jsx**: Página sobre política de privacidade e proteção de dados.
- **Faculdade.jsx**: Página com informações institucionais da faculdade.
- **Inicial.jsx**: Página inicial do site.
- **Noticias.jsx**: Exibe todas as notícias em formato de cards.
- **VisualizaNoticia.jsx**: Exibe os detalhes completos de uma notícia selecionada.

#### Outros Arquivos
- **App.jsx**: Componente raiz que define a estrutura principal da aplicação.
- **config.js**: Configurações globais, como a URL da API.
- **index.js**: Renderiza o aplicativo React no DOM.

---

## 📦 Bibliotecas Utilizadas
- **React.js**: Framework JavaScript para construção de interfaces.
- **Material-UI**: Biblioteca de componentes para o design responsivo e moderno.
- **React Router**: Gerenciamento de rotas para navegação entre páginas.
- **Axios**: Para consumo de APIs RESTful.
- **JSON Server**: Simulação de backend para CRUD.

---

## 🌐 Implantação na Vercel
Para publicar este projeto na **Vercel**:
1. Certifique-se de que o repositório está no **GitHub**.
2. Conecte o repositório à conta na **Vercel**.
3. Configure as variáveis de ambiente (se necessário).
4. Siga as instruções da Vercel para realizar o deploy.

---
