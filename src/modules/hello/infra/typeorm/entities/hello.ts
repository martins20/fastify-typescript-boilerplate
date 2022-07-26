import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

import { HelloEntity } from "@modules/hello/entities/hello";

@Entity("hello")
export class TypeormHelloEntity implements HelloEntity {
  @PrimaryGeneratedColumn()
  id!: string;

  @Column()
  test!: boolean;
}
