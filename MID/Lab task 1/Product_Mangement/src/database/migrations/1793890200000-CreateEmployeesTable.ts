import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateEmployeesTable1793890200000 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "employees",
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
            name: "email",
            type: "varchar",
            length: "255",
            isNullable: false,
            isUnique: true,
          },
          { name: "phone", type: "varchar", length: "20", isNullable: false },
          {
            name: "password",
            type: "varchar",
            length: "255",
            isNullable: false,
          },
          { name: "age", type: "int", isNullable: false },
          { name: "years_of_working", type: "int", isNullable: false },
        ],
      }),
      true,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("employees", true);
  }
}
