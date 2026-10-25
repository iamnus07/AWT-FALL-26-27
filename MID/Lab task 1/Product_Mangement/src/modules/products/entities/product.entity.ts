import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "products", schema: "public" })
export class Product {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({ type: "varchar", length: 150 })
  name!: string;

  @Column({ type: "varchar", length: 100 })
  category!: string;

  // Postgres returns decimals as strings, so convert back to a number
  @Column({
    type: "decimal",
    precision: 10,
    scale: 2,
    transformer: {
      to: (value: number) => value,
      from: (value: string) => parseFloat(value),
    },
  })
  price!: number;

  @Column({ type: "int" })
  quantity!: number;
}
