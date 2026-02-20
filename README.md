# 🚀 CRUD Fullstack: Do Zero ao Deploy

Este projeto é o meu "batismo de fogo" no desenvolvimento Fullstack. Nele, construí uma aplicação completa de gerenciamento de usuários, conectando um Front-end moderno e responsivo a um servidor Back-end real.

<img width="627" height="462" alt="image" src="https://github.com/user-attachments/assets/0f30ed4d-3c29-4989-8274-e4ea3908041a" />


## 📝 Sobre o Projeto
O objetivo foi sair da teoria e entender como os dados viajam entre o navegador do usuário e o servidor. A aplicação permite criar, listar, editar e excluir registros em tempo real, sem a necessidade de recarregar a página (conceito de SPA - Single Page Application).

## 🛠️ Tecnologias Utilizadas
* **Front-end:** HTML5, CSS3 (Variáveis e Flexbox) e JavaScript Vanilla.
* **Back-end:** Node.js com o framework Express.
* **Comunicação:** API Fetch com suporte a `async/await`.
* **Segurança/Conectividade:** Middleware CORS para permitir a comunicação entre o navegador e o servidor local.

## 💡 O que eu aprendi 
Construir esse CRUD me fez entender que programar é muito mais do que apenas escrever código; é entender o fluxo da informação:

* **Ciclo de Vida de uma Requisição:** Entendi na prática a diferença entre os métodos `GET` (buscar), `POST` (enviar), `PUT` (editar) e `DELETE` (apagar).
* **Estado da Aplicação:** Como gerenciar quando o sistema deve estar em "modo de edição" ou "modo de criação" no Front-end.
* **Resolução de Erros:** Enfrentei o famoso erro de "ReferenceError" por ordem de inicialização e aprendi a configurar o CORS para o navegador não bloquear minhas requisições.
* **UX/UI Básica:** A importância de dar um feedback visual para o usuário (como mudar a cor do botão ao editar).

## 🏃 Como rodar o projeto

### 1. Pré-requisitos
Você precisará ter o [Node.js](https://nodejs.org/) instalado em sua máquina.

### 2. Instalação
Clone o repositório e instale as dependências:
```bash
# Clone o repositório
git clone [https://github.com/carolina-sv/Basic-CRUD.git]

# Entre na pasta
cd crud-project

# Instale o Express e o CORS
npm install express cors
```

### 3. Execução

Inicie o servidor:
```bash
node server.js
```
Após isso, basta abrir o arquivo index.html diretamente no seu navegador.

## 📌 Próximos Passos

[X] Implementar persistência de dados em um arquivo .json ou banco de dados.

[X] Adicionar validação de campos para evitar nomes vazios.

[X] Criar uma interface Dark Mode.

