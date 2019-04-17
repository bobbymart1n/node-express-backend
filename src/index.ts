import "reflect-metadata";
import { createConnection } from "typeorm";
import { User } from "./entity/User";

createConnection().then(async connection => {

    console.log("Inserting a new user into the database...");
    const user = new User();
    user.firstName = "Timber";
    user.lastName = "Saw";
    user.age = 25;
    await connection.manager.save(user);
    console.log("Saved a new user with id: " + user.id);

    console.log("Loading users from the database...");
    const users = await connection.manager.find(User);
    console.log("Loaded users: ", users);

    const express = require("express");
    const app = express();
    const port = 4000;

    app.listen(port, () => console.log(`Example app listening on port ${port}!`));

}).catch(error => console.log(error));
