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
  <a href="#-project-video-presentation">Video</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-technologies-used">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-about">About</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-routes-and-examples">Routes</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-middlewares">Middlewares</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-cloning-the-project">Cloning</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-contributor-contact">Contact</a>
</p>
<br>

## 📹 Project Video Presentation
<div align="center">
  <video src="https://user-images.githubusercontent.com/86276393/173689507-cae47ac3-b85c-495f-8cd2-d548301d0610.mp4">
</div>

> **If the video has any errors, reload the page!**<br>
> Access the project online **[HERE](https://luk4x-user-register-api.herokuapp.com/users)**

## 🚀 Technologies Used

- [NodeJS](https://nodejs.org)
- [ExpressJS](https://expressjs.com/)
- [UUID](https://www.uuidgenerator.net/)
- [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [Yarn](https://yarnpkg.com/)

## 📝 About

> Watching the video above and/or accessing the project online will help you understand the explanation!

This project is the **Users** API, a web application that performs the registration and management of users, serving as the basis for its [Interface](https://github.com/Luk4x/user-register-interface ) that I developed essentially in ReactJS.

### 📃 Routes and Examples
-   `POST /users`: This route is given the user's name and age. this information is passed by the `body` of the request, and based on it a new user is registered in an array, in the following format:
    
    ```js
    {
      name: "Lucas",
      age: 18,
      id: "06d5e912-d672-49ca-92c9-5a4e0e470f15"
    }
    ```

    The `id` information is generated in the system by the `uuid` library and incorporated into the user.<br>
    This route also has a check to prevent users with incomplete data from being registered.
    
-   `GET /users`: This route lists all users registered in the array.

-   `GET /users/:id`: Based on the `id` sent, this route returns a specific user.

-   `PUT /users/:id`: Based on the `id` sent, this route can change one or all of a user's data (except the `id`).

-   `DELETE /users/:id`:  Based on the `id` sent, delete the user who owns it.

<br>

- When calling the `POST /users` route twice, passing `{ name: "Hana", age: 23 }` through `body`, the array looks like this:

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

- When calling the `GET /users/e671f3a7-4d0a-4c44-b850-c16ab6785e89` route, the return is:

```js
{
  name: "Hana",
  age: 23,
  id: "e671f3a7-4d0a-4c44-b850-c16ab6785e89"
};
```

### 🔑 Middlewares
- `checkUserId`: Its function is to check if the received ID exists and take action if it doesn't. It is used on all routes that are given an ID.

- `showMethodNUrl`: Its function is to show in the console the method (GET,POST,PUT,DELETE, etc) and also the url of the request. It is used in all requests and is only intended to facilitate and organize development.

- `verifyUserData`: Its function is to verify the user data sent by the `body`, and take action if this request intends to modify data that the user does not have permission to.

## 📖 Cloning the Project

To clone and run this project on your computer you will need [Git](https://git-scm.com/), [Node.js v16.13.2](https://nodejs.org/en/) or higher, [Yarn](https://yarnpkg.com/), and preferably an API Client such as [Insomnia](https://insomnia.rest/) (but can also be accessed through the browser) previously installed.<br>In the terminal:

```bash
# Clone this repository with:
> git clone https://github.com/Luk4x/user-register-API.git

# Enter the repository with:
> cd user-register-API

# Install dependencies with: 
> yarn install

# Run the project with:
> yarn app

# Once this is done, you will be able to access the project through the link that will appear in the terminal! (something like http://localhost:3001/ or http://127.0.0.1:5173/)
```

## 🤝 Contributor Contact

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
| :sparkles: Name        | **👥 Users Project API**
| :label: Technologies | nodejs, expressjs, javascript, uuid, yarn
| :camera: Img         | <img src="https://user-images.githubusercontent.com/86276393/202927332-e2d48943-173a-48e9-8157-ed8a2abf104b.png#vitrinedev" alt="vitrine.dev thumb" width="100%"/>

</details>
</td>
</tr>
</table>

<p align="right">
  <a href="#-users-project-api">Back to Top</a>
</p>
