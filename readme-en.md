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

## Technologies used
- [NodeJS](https://nodejs.org)
- [ExpressJS](https://expressjs.com/)
- [UUID](https://www.uuidgenerator.net/)

## About
This project is an API that performs the registration of users, serving as the basis for the [Interface](https://github.com/Luk4x/user-register-interface) I built.

### Routes
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

#### Examples
When calling the `POST /users` route twice, passing `{ name: "Hana", age: 23 }` through `body`, the array looks like this:

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

When calling the `GET /users/e671f3a7-4d0a-4c44-b850-c16ab6785e89` route, the return is:

```js
{
  name: "Hana",
  age: 23,
  id: "e671f3a7-4d0a-4c44-b850-c16ab6785e89"
};
```

### Middlewares
- `checkUserId`: Its function is to check if the received ID exists and take action if it doesn't. It is used on all routes that are given an ID.

- `showMethodNUrl`: Its function is to show in the console the method (GET,POST,PUT,DELETE, etc) and also the url of the request. It is used in all requests and is only intended to facilitate and organize development.

- `verifyUserData`: Its function is to verify the user data sent by the `body`, and take action if this request intends to modify data that the user does not have permission to.

## How to use
To clone and run this application, you'll need [Git](https://git-scm.com/), [Node.js v16.13.2](https://nodejs.org/en/) or higher and an API Client like [Insomnia](https://insomnia.rest/) installed on your computer.<br>In terminal:

```bash
# Clone this repository:
$ git clone https://github.com/Luk4x/user-register-API.git

# Go into the repository:
$ cd user-register-API

# Install dependencies: 
$ yarn install

# Run the project:
$ yarn app

# The server will start at http://localhost:3001/, and you can explore it using Insomnia.
```

## Contributors Contact
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
