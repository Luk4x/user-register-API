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
<br>

# User Register API
<p align="center">
  <video src="https://user-images.githubusercontent.com/86276393/173689507-cae47ac3-b85c-495f-8cd2-d548301d0610.mp4">
</p>
<br>
  
## Sobre
Esse projeto é uma API que realiza o cadastro de usuários.

### Rotas
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

#### Exemplos
Ao chamar a rota `POST /users` 2 vezes, passando `{ name: "Hana", age: 23 }` pelo `body`, o array fica dessa forma:

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

Ao chamar a rota `GET /users/e671f3a7-4d0a-4c44-b850-c16ab6785e89`, o retorno é:

```js
{
  name: "Hana",
  age: 23,
  id: "e671f3a7-4d0a-4c44-b850-c16ab6785e89"
};
```

### Middlewares
- `checkUserId`: Sua função é verificar se o ID recebido existe e tomar medidas em caso de inexistência. Ele é usado em todas as rotas que recebem um ID.

- `showMethodNUrl`: Sua função é mostrar no console o método(GET,POST,PUT,DELETE, etc) e também a url da requisição. Ele é usado em todas as requisições e tem o objetivo apenas de facilitar e organizar o desenvolvimento.

- `verifyUserData`: Sua função é verificar os dados do usuário enviados pelo `body`, e tomar medidas caso essa requisição tenha a intenção de modificar dados que o usuário não tem permissão.

## Como usar
Para clonar e executar este projeto, você precisará do [Git](https://git-scm.com/), [Node.js v16.13.2](https://nodejs.org/en/) ou superior, e de um API Client como o [Insomnia](https://insomnia.rest/) instalados em seu computador.<br>No terminal:

```bash
# Clone esse repositório:
$ git clone https://github.com/Luk4x/user-register-API.git

# Entre no repositório:
$ cd user-register-API

# Instalar dependências 
$ yarn install

# Executar o projeto
$ yarn app

# O servidor irá iniciar em http://localhost:3001/, e você pode explorá-lo usando o Insomnia.
```

## Contato dos Contribuintes
<table>
  <tr>
    <td align="center">
      <a href="https://www.linkedin.com/in/lucasmacielf/">
        <img src="https://avatars.githubusercontent.com/Luk4x" width="150px;" alt="Luk4x Github Photo"/><br>
        <sub>
          <b>Lucas Maciel</b>
        </sub>
      </a>
    </td>
  </tr>
</table>
