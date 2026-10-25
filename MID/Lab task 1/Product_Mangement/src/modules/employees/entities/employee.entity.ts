import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "employees", schema: "public" })
export class Employee {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({ type: "varchar", length: 150 })
  name!: string;

  @Column({ type: "varchar", length: 255, unique: true })
  email!: string;

  @Column({ type: "varchar", length: 20 })
  phone!: string;

  @Column({ type: "varchar", length: 255 })
  password!: string;

  @Column({ type: "int" })
  age!: number;

  @Column({ name: "years_of_working", type: "int" })
  yearsOfWorking!: number;
}
