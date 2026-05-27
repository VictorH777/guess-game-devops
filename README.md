# 🎮 Guess Game DevOps

Este projeto é um jogo de adivinhação desenvolvido com Flask (backend) e React (frontend), evoluído para uma arquitetura moderna baseada em containers utilizando Docker Compose.

A aplicação permite criar e adivinhar palavras secretas, além de implementar autenticação de usuários e persistência de dados.


## Funcionalidades

- Criação de um novo jogo com uma senha fornecida pelo usuário.
- Adivinhe a senha e receba feedback se as letras estão corretas e/ou em posições corretas.
- As senhas são armazenadas  utilizando base64.
- As adivinhações incorretas retornam uma mensagem com dicas.
- Criação de usuario na base de dados
- Login em um usuario/jogo existente
  
## Requisitos

- Docker
- Docker Compose
- Git

## Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/VictorH777/guess-game-devops
   cd guess-game
   ```

2. Rodar aplicação:

  ```bash
  docker-compose up --build
  ```

3. Acessar a aplicação

    Abra no navegador:
        http://localhost:8080


## Arquitetura do sistema

A aplicação é composta pelos seguintes serviços:
### Frontend (React)

Interface do usuário
Consome a API do backend
Buildado e servido via container

### Backend (Flask)

API REST do jogo
Executa lógica de autenticação (JWT)
Gerencia persistência de dados

Executa em múltiplas instâncias:
backend1
backend2

→ Permite balanceamento de carga e escalabilidade horizontal

### Banco de Dados (PostgreSQL)

Armazena usuários e jogos
Persistente através de volume Docker

### NGINX (Proxy reverso)
Responsável por:

Servir o frontend
Redirecionar chamadas /api
Balancear carga entre backend1 e backend2


## Autenticação (funcionalidades nova)

Registro de usuário
Login com token JWT
Autorização via Bearer Token

### Persistência

Salvar estado do jogo
Recuperar histórico de jogos

### Histórico

Visualizar jogos salvos
Dados separados por usuário



## 🎯 Como Jogar

### 🔐 1. Criar usuário e fazer login

- Acesse a aplicação em:
    ```bash
    http://localhost:8080
    ```
- Vá até a página de login
- Registre um novo usuário
- Faça login para obter acesso completo ao sistema

---

### 🎮 2. Criar um novo jogo

- Na tela principal, insira uma frase secreta
- Envie o formulário para criar o jogo
- Um **game_id** será gerado
- Salve esse ID para usar nas tentativas de adivinhação

---

### 🎯 3. Adivinhar a palavra

- Acesse a página **Breaker**
- Insira o **game_id** criado anteriormente
- Digite suas tentativas de adivinhação
- O sistema irá retornar dicas sobre acertos e posições corretas

---

### 💾 4. Salvar o jogo

- Durante o jogo, clique no botão:

💾 Salvar jogo
- O estado atual será armazenado no banco de dados
- É necessário estar logado

---

### 📂 5. Acessar histórico

- Acesse a página **Histórico**
- Visualize todos os jogos salvos
- Cada usuário vê apenas seus próprios dados

## Melhorias implementadas

Este projeto foi estendido em relação à versão original, incluindo:

- Containerização completa com Docker
- Orquestração com Docker Compose
- Proxy reverso com NGINX
- Balanceamento de carga
- Integração com banco PostgreSQL
- Autenticação com JWT
- Sistema de salvamento e histórico de jogos
- Interface frontend conectada à API

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).