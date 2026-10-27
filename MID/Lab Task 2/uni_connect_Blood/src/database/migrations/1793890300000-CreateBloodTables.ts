import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
  TableUnique,
} from "typeorm";
import {
  BloodGroup,
  RequestStatus,
  ResponseStatus,
  UrgencyLevel,
} from "../../common/enums/blood.enum";

const idColumn = {
  name: "id",
  type: "uuid",
  isPrimary: true,
  generationStrategy: "uuid" as const,
  default: "gen_random_uuid()",
};

const timestamps = [
  { name: "created_at", type: "timestamptz", default: "CURRENT_TIMESTAMP" },
  { name: "updated_at", type: "timestamptz", default: "CURRENT_TIMESTAMP" },
];

export class CreateBloodTables1793890300000 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    // 1. donor_profiles
    await queryRunner.createTable(
      new Table({
        name: "donor_profiles",
        schema: "public",
        columns: [
          idColumn,
          { name: "user_id", type: "uuid", isNullable: false, isUnique: true },
          {
            name: "blood_group",
            type: "enum",
            enum: Object.values(BloodGroup),
            enumName: "donor_blood_group_enum",
            isNullable: false,
          },
          { name: "phone", type: "varchar", length: "20", isNullable: false },
          {
            name: "location",
            type: "varchar",
            length: "150",
            isNullable: false,
          },
          { name: "last_donation_date", type: "date", isNullable: true },
          { name: "is_available", type: "boolean", default: true },
          ...timestamps,
        ],
      }),
      true,
    );

    // 2. blood_requests
    await queryRunner.createTable(
      new Table({
        name: "blood_requests",
        schema: "public",
        columns: [
          idColumn,
          { name: "requester_id", type: "uuid", isNullable: false },
          {
            name: "patient_name",
            type: "varchar",
            length: "150",
            isNullable: false,
          },
          {
            name: "blood_group",
            type: "enum",
            enum: Object.values(BloodGroup),
            enumName: "request_blood_group_enum",
            isNullable: false,
          },
          { name: "units_needed", type: "int", isNullable: false },
          {
            name: "hospital",
            type: "varchar",
            length: "200",
            isNullable: false,
          },
          {
            name: "location",
            type: "varchar",
            length: "150",
            isNullable: false,
          },
          {
            name: "contact_phone",
            type: "varchar",
            length: "20",
            isNullable: false,
          },
          { name: "needed_by", type: "timestamptz", isNullable: false },
          {
            name: "urgency",
            type: "enum",
            enum: Object.values(UrgencyLevel),
            enumName: "urgency_level_enum",
            default: `'${UrgencyLevel.MEDIUM}'`,
          },
          {
            name: "status",
            type: "enum",
            enum: Object.values(RequestStatus),
            enumName: "request_status_enum",
            default: `'${RequestStatus.OPEN}'`,
          },
          { name: "note", type: "text", isNullable: true },
          ...timestamps,
        ],
      }),
      true,
    );

    // 3. blood_responses
    await queryRunner.createTable(
      new Table({
        name: "blood_responses",
        schema: "public",
        columns: [
          idColumn,
          { name: "request_id", type: "uuid", isNullable: false },
          { name: "donor_id", type: "uuid", isNullable: false },
          {
            name: "status",
            type: "enum",
            enum: Object.values(ResponseStatus),
            enumName: "response_status_enum",
            default: `'${ResponseStatus.PENDING}'`,
          },
          { name: "message", type: "text", isNullable: true },
          ...timestamps,
        ],
      }),
      true,
    );

    // one response per donor per request
    await queryRunner.createUniqueConstraint(
      "blood_responses",
      new TableUnique({
        name: "UQ_blood_responses_request_donor",
        columnNames: ["request_id", "donor_id"],
      }),
    );

    // foreign keys
    await queryRunner.createForeignKeys("donor_profiles", [
      new TableForeignKey({
        columnNames: ["user_id"],
        referencedTableName: "users",
        referencedColumnNames: ["id"],
        onDelete: "CASCADE",
      }),
    ]);

    await queryRunner.createForeignKeys("blood_requests", [
      new TableForeignKey({
        columnNames: ["requester_id"],
        referencedTableName: "users",
        referencedColumnNames: ["id"],
        onDelete: "CASCADE",
      }),
    ]);

    await queryRunner.createForeignKeys("blood_responses", [
      new TableForeignKey({
        columnNames: ["request_id"],
        referencedTableName: "blood_requests",
        referencedColumnNames: ["id"],
        onDelete: "CASCADE",
      }),
      new TableForeignKey({
        columnNames: ["donor_id"],
        referencedTableName: "donor_profiles",
        referencedColumnNames: ["id"],
        onDelete: "CASCADE",
      }),
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("blood_responses", true);
    await queryRunner.dropTable("blood_requests", true);
    await queryRunner.dropTable("donor_profiles", true);

    await queryRunner.query(`DROP TYPE IF EXISTS "response_status_enum"`);
    await queryRunner.query(`DROP TYPE IF EXISTS "request_status_enum"`);
    await queryRunner.query(`DROP TYPE IF EXISTS "urgency_level_enum"`);
    await queryRunner.query(`DROP TYPE IF EXISTS "request_blood_group_enum"`);
    await queryRunner.query(`DROP TYPE IF EXISTS "donor_blood_group_enum"`);
  }
}
