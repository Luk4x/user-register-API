const express = require('express');
const uuid = require('uuid');
const app = express();
app.use(express.json());
const port = 3000;

// users registered
const usersList = [];

// middleware's
const showMethodNUrl = (req, res, next) => {
    console.log(`${req.method}: ${req.url}`);

    next();
};
app.use(showMethodNUrl);

const checkUserId = (req, res, next) => {
    // finding user by id
    const userId = req.params.id;
    const userIndex = usersList.findIndex(user => user.id === userId);

    // return error if not found
    if (userIndex < 0) {
        return res.status(404).json({ error: 'User Not Found' });
    }

    // incorporating the user index in request
    req.userIndex = userIndex;

    next();
};

// verify if client is trying to change or add id information
const verifyUserData = (req, res, next) => {
    const { id } = req.body;

    if (id) {
        return res.status(401).json({ error: 'Unable to change id information' });
    }

    next();
};

// routes

// view all users
app.get('/users', (req, res) => {
    try {
        return res.json(usersList);
    } catch (err) {
        console.error(`Something happened: ${err.message}`);
        return res.status(500).json({ error: err.message });
    }
});

// view an specific user
app.get('/users/:id', checkUserId, (req, res) => {
    try {
        return res.json(usersList[req.userIndex]);
    } catch (err) {
        console.error(`Something happened: ${err.message}`);
        return res.status(500).json({ error: err.message });
    }
});

// create a user
app.post('/users', verifyUserData, (req, res) => {
    /* request(body) pattern:
        {
            "name": "Leone",
            "age": "22"
        }
    */

    // receiving data
    const { name, age } = req.body;
    const registeredUser = { name, age, id: uuid.v4() };

    // verifying data received
    for (userData in registeredUser) {
        if (!registeredUser[userData]) return res.status(400).json({ error: 'Missing Data' });
    }

    // trying to register user
    try {
        usersList.push(registeredUser);
        return res.status(201).json(registeredUser);
    } catch (err) {
        console.error(`Something happened: ${err.message}`);
        return res.status(500).json({ error: err.message });
    }
});

// updating an user (by id)
app.put('/users/:id', checkUserId, verifyUserData, (req, res) => {
    // receiving user data
    const { name, age } = req.body;
    const newData = { name, age };

    try {
        // function to update one or more data from an user
        for (let userData in usersList[req.userIndex]) {
            for (data in newData) {
                if (newData[data] && data === userData) usersList[req.userIndex][data] = newData[data];
            }
        }
        return res.json({ updatedUser: usersList[req.userIndex] });
    } catch (err) {
        console.error(`Something happened: ${err.message}`);
        return res.status(500).json({ error: err.message });
    }
});

// delete an user
app.delete('/users/:id', checkUserId, (req, res) => {
    try {
        usersList.splice(req.userIndex, 1);
        return res.status(204).json();
    } catch (err) {
        console.error(`Something happened: ${err.message}`);
        return res.status(500).json({ error: err.message });
    }
});

app.listen(port, () => {
    console.log(`㊗️ - server started in port: ${port}.`);
});
