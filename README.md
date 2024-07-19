# Compacine

## Descrição

Este projeto é um sistema de cinema usando Node.js, Express, Docker, MongoDB e Prisma. Ele permite gerenciar filmes, sessões e ingressos, e inclui uma página web para visualizar filmes e sessões.

## Funcionalidades

- CRUD de filmes, sessões e ingressos
- Visualização de filmes e suas sessões em uma página web

## Pré-requisitos

- Node.js
- Docker e Docker Compose

## Instalação

1. Clone o repositório:

    ```
    git clone https://github.com/pauloshp/Compacine.git
    ```

2. Instale as dependencias:

    ```
    cd Compacine && npm install
    ```

3. Construa e execute os contêineres Docker:

    ```
    docker-compose up --build
    ```

4. Execulte a aplicação

    ```
    npm run dev
    ```

## Configuração .env

**PORT**: Define a porta do servidor Express.  
**MONGO_URL**: URL de conexão com o MongoDB.

## Utilizando 

**Endpoints Back-End**

**Filmes**

- **GET /movies**: Listar todos os filmes
- **POST /movies**: Adicionar um novo filme
- **PUT /movies/{id}**: Atualizar um filme por ID
- **DELETE /movies/{id}**: Excluir um filme por ID

**Sessões**

- **GET /sessions**: Listar todas as sessões
- **POST /sessions/create-session**: Adicionar uma nova sessão
- **PUT /sessions/{id}**: Atualizar uma sessão por ID
- **DELETE /sessions/{id}**: Excluir uma sessão por ID

**Ingressos**

- **GET /tickets**: Listar todos os ingressos
- **POST /sessions/create-ticket**: Adicionar um novo ingresso
- **PUT /tickets/{id}**: Atualizar um ingresso por ID
- **DELETE /tickets/{id}**: Excluir um ingresso por ID

**Front-End**

Visite http://localhost:3000 em seu navegador para visualizar a lista de filmes e suas sessões.