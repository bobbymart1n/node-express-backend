import express = require("express");
import "reflect-metadata";
import uuid from "uuid/v4";
import { createConnection } from "typeorm";
import { User } from "./entity/User";
import { Item } from "./entity/Item";

createConnection().then(async connection => {
    const app = express();
    const port = 4000;

    app.get("/create", async (req, res) => {
        const user = new User();
        console.log("Inserting a new user into the database...");
        user.firstName = "Timber";
        user.lastName = "Saw";
        user.age = 25;
        await connection.manager.save(user);
        console.log("Saved a new user with id: " + user.id);
        res.send(user);
    });

    app.get("/read", async (req, res) => {
        console.log("Loading users from the database...");
        const users = await connection.manager.find(User);
        console.log("Loaded users: ", users);
        res.send(users);
    });

    app.listen(port, () => console.log(`Example app listening on port ${port}!`));

}).catch(error => console.log(error));
