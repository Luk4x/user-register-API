<table align="right">
  <tr>
    <td>
      <a href="readme-en.md">🇺🇸 English</a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="README.md">🇧🇷 Português</a>
    </td>
  </tr>
</table>

![luk4x-repo-status](https://img.shields.io/badge/Status-Finished-lightgrey?style=for-the-badge&logo=headspace&logoColor=green&color=lightgrey)
![luk4x-repo-license](https://img.shields.io/github/license/Luk4x/user-register-API?style=for-the-badge&logo=unlicense&logoColor=lightgrey)
# 👥 Users Project API

<br>
<p align="center">
  <a href="#-apresentação-em-vídeo-do-projeto">Vídeo</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-tecnologias-utilizadas">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-sobre">Sobre</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-rotas-e-exemplos">Rotas</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-middlewares">Middlewares</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-clonando-o-projeto">Clone</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-contato-dos-contribuintes">Contato</a>
</p>
<br>

## 📹 Apresentação em Vídeo do Projeto
<div align="center">
  <video src="https://user-images.githubusercontent.com/86276393/173689507-cae47ac3-b85c-495f-8cd2-d548301d0610.mp4">
</div>

> **Caso o vídeo apresente algum erro, recarregue a página!**<br>
> Acesse o projeto online **[AQUI](https://luk4x-user-register-api.onrender.com/users)**

## 🚀 Tecnologias utilizadas

- [NodeJS](https://nodejs.org)
- [ExpressJS](https://expressjs.com/)
- [UUID](https://www.uuidgenerator.net/)
- [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [Yarn](https://yarnpkg.com/)

## 📝 Sobre

> Assistir o vídeo acima e/ou acessar o projeto online ajudará na compreensão da explicação!

Esse projeto é a API do **Users**, uma aplicação Web que realiza o cadastro e a gerência de usuários, servindo como base para a sua [Interface](https://github.com/Luk4x/user-register-interface) que desenvolvi essencialmente em ReactJS.

### 📃 Rotas e Exemplos
-   `POST /users`: Essa rota recebe o nome e a idade do usuário. essas informações são passadas pelo `body` da requisição, e com base nelas um novo usuário é registrado num array, no seguinte formato:
    
    ```js
    {
      name: "Lucas",
      age: 18,
      id: "06d5e912-d672-49ca-92c9-5a4e0e470f15"
    }
    ```

    A informação de `id` é gerada no sistema pela biblioteca `uuid` e incorporada ao usuário.<br>
    Essa rota também tem uma verificação para impedir que usuários com dados incompletos sejam cadastrados.

-   `GET /users`: Essa rota lista todos os usuários cadastrados no array.

-   `GET /users/:id`: Com base no `id` enviado, essa rota retorna um usuário específico.

-   `PUT /users/:id`: Com base no `id` enviado, essa rota pode alterar um, ou todos os dados de um usuário (exceto o `id`).
  
-   `DELETE /users/:id`:  Com base no `id` enviado, deleta o usuário que o possui.

<br>

- Ao chamar a rota `POST /users` 2 vezes, passando `{ name: "Hana", age: 23 }` pelo `body`, o array fica dessa forma:

```js
[
    {
      name: "Hana",
      age: 23,
      id: "05a5913e-h325-da2a-75c9-93f20e02fa19"
    },
    {
      name: "Hana",
      age: 23,
      id: "e671f3a7-4d0a-4c44-b850-c16ab6785e89"
    }
];
```

- Ao chamar a rota `GET /users/e671f3a7-4d0a-4c44-b850-c16ab6785e89`, o retorno é:

```js
{
  name: "Hana",
  age: 23,
  id: "e671f3a7-4d0a-4c44-b850-c16ab6785e89"
};
```

### 🔑 Middlewares
- `checkUserId`: Sua função é verificar se o ID recebido existe e tomar medidas em caso de inexistência. Ele é usado em todas as rotas que recebem um ID.

- `showMethodNUrl`: Sua função é mostrar no console o método(GET,POST,PUT,DELETE, etc) e também a url da requisição. Ele é usado em todas as requisições e tem o objetivo apenas de facilitar e organizar o desenvolvimento.

- `verifyUserData`: Sua função é verificar os dados do usuário enviados pelo `body`, e tomar medidas caso essa requisição tenha a intenção de modificar dados que o usuário não tem permissão.

## 📖 Clonando o Projeto

Para clonar e executar este projeto em seu computador, você precisará do [Git](https://git-scm.com/), [Node.js v16.13.2](https://nodejs.org/en/) ou superior, [Yarn](https://yarnpkg.com/), e de preferência, um API Client como o [Insomnia](https://insomnia.rest/) (mas também pode ser acessado pelo navegador) previamente instalados.<br>No terminal:

```bash
# Clone esse repositório com:
> git clone https://github.com/Luk4x/user-register-API.git

# Entre no repositório com:
> cd user-register-API

# Instale as dependências com: 
> yarn install

# Execute o projeto com:
> yarn app

# Feito isso, você já poderá acessar o projeto pelo link que aparecerá no terminal! (algo como http://localhost:3001/ ou http://127.0.0.1:5173/)
```

## 🤝 Contato dos Contribuintes

<table border="2">
  <tr>
    <td align="center">
      <details>
        <summary>
          <b><a href="https://cursos.alura.com.br/vitrinedev/lucasmacielf">Vitrine.Dev</a> 🪟</b>
          <table>
            <tr>
              <td align="center">
                <a href="https://github.com/Luk4x">
                  <img src="https://avatars.githubusercontent.com/Luk4x" width="150px;" alt="Luk4x Github Photo"/>
                </a>
                <br>
                <a href="https://www.linkedin.com/in/lucasmacielf/">
                  <sub>
                    <b>Lucas Maciel</b>
                  </sub>
                </a>
              </td>
            </tr>
          </table>
        </summary>

| :placard: Vitrine.Dev | Lucas Maciel |
| -------------  | --- |
| :sparkles: Nome        | **👥 Users Project API**
| :label: Tecnologias | nodejs, expressjs, javascript, uuid, yarn
| :camera: Img         | <img src="https://user-images.githubusercontent.com/86276393/202927332-e2d48943-173a-48e9-8157-ed8a2abf104b.png#vitrinedev" alt="vitrine.dev thumb" width="100%"/>

</details>
</td>
</tr>
</table>

<p align="right">
  <a href="#-users-project-api">Voltar ao Topo</a>
</p>
