import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateProductsTable1793890100000 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "products",
        schema: "public",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
            generationStrategy: "uuid",
            default: "gen_random_uuid()",
          },
          { name: "name", type: "varchar", length: "150", isNullable: false },
          {
            name: "category",
            type: "varchar",
            length: "100",
            isNullable: false,
          },
          {
            name: "price",
            type: "decimal",
            precision: 10,
            scale: 2,
            isNullable: false,
          },
          { name: "quantity", type: "int", isNullable: false },
        ],
      }),
      true, // same as CREATE TABLE IF NOT EXISTS
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("products", true);
  }
}
