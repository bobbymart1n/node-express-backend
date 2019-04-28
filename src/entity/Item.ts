import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Item {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  buyer: string;

  @Column()
  seller: string;

  @Column()
  itemName: string;

  @Column()
  trackingNumber: number;

}