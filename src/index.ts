import "reflect-metadata";
const uuid = require("uuid/v4");
import { createConnection } from "typeorm";
import { User } from "./entity/User";
import { Item } from "./entity/Item";

const addUser = async (connection) => {
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
};

const addItem = async (connection) => {
    console.log("Inserting a new item into the database...");
    const item = new Item();
    item.buyer = uuid();
    item.seller = uuid();
    item.itemName = "Lawnmower";
    item.trackingNumber = 1234;
    await connection.manager.save(item);
    console.log("Saved a new item with id: " + item.id);

    console.log("Loading item from the database...");
    const items = await connection.manager.find(Item);
    console.log("Loaded users: ", items);
};

createConnection().then(async connection => {

    await addUser(connection);
    await addItem(connection);

    const express = require("express");
    const app = express();
    const port = 4000;

    app.listen(port, () => console.log(`Example app listening on port ${port}!`));

}).catch(error => console.log(error));
