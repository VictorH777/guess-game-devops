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

  docker-compose up --build

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

## Como Jogar

### 1. Criar um novo jogo

Acesse a url do frontend http://localhost:3000

Digite uma frase secreta

Envie

Salve o game-id


### 2. Adivinhar a senha

Acesse a url do frontend http://localhost:3000

Vá para o endponint breaker

entre com o game_id que foi gerado pelo Creator

Tente adivinhar

## Estrutura do Código

### Rotas:

- **`/create`**: Cria um novo jogo. Armazena a senha codificada em base64 e retorna um `game_id`.
- **`/guess/<game_id>`**: Permite ao usuário adivinhar a senha. Compara a adivinhação com a senha armazenada e retorna o resultado.

### Classes Importantes:

- **`Guess`**: Classe responsável por gerenciar a lógica de comparação entre a senha e a tentativa do jogador.
- **`WrongAttempt`**: Exceção personalizada que é levantada quando a tentativa está incorreta.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

