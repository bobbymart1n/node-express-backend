import express = require("express");
import "reflect-metadata";
import { createConnection } from "typeorm";
import { createItem, readItems } from "./itemsManager";

createConnection().then(async connection => {
    const app = express();
    const port = 4000;

    app.get("/create", createItem);
    app.get("/read", readItems);

    // app.get("/create", async (req, res) => {
    //     const user = new User();
    //     console.log("Inserting a new user into the database...");
    //     user.firstName = "Timber";
    //     user.lastName = "Saw";
    //     user.age = 25;
    //     await connection.manager.save(user);
    //     console.log("Saved a new user with id: " + user.id);
    //     res.send(user);

    //     console.log("Inserting a new item into the database...");
    //     const item = new Item();
    //     item.buyer = uuid();
    //     item.seller = uuid();
    //     item.itemName = "Lawnmower";
    //     item.trackingNumber = 1234;
    //     await connection.manager.save(item);
    //     console.log("Saved a new item with id: " + item.id);

    //     console.log("Loading item from the database...");
    //     const items = await connection.manager.find(Item);
    //     console.log("Loaded users: ", items);
    // });

    // app.get("/read", async (req, res) => {
    //     console.log("Loading users from the database...");
    //     const users = await connection.manager.find(User);
    //     console.log("Loaded users: ", users);
    //     res.send(users);
    // });

    app.listen(port, () => console.log(`Example app listening on port ${port}!`));

}).catch(error => console.log(error));
