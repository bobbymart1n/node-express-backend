import { Request, Response } from "express";
import { getConnection, Repository } from "typeorm";
import uuid from "uuid/v4";
import { Item } from "./entity/Item";

let repository: Repository<Item>;

const initialize = () => {
  const connection = getConnection();
  repository = connection.getRepository(Item);
};

export const createItem = async (_: Request, res: Response) => {
  if (repository === undefined) {
    initialize();
  }
  const item = new Item();
  item.id = uuid();
  item.itemName = "Cool Item";
  console.log("Add item with the name: ", item.itemName);
  await repository.save(item);
  res.send(item);
};

export const readItems = async (_: Request, res: Response) => {
  if (repository === undefined) {
    initialize();
  }
  const items = await repository.find();
  res.send(items);
};