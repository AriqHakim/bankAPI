import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class ClientMigration1656407323696 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "client",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
          },
          {
            name: "first_name",
            type: "varchar",
          },
          {
            name: "last_name",
            type: "varchar",
          },
          {
            name: "email",
            type: "varchar",
            isUnique: true,
          },
          {
            name: "card-number",
            type: "varchar",
            isUnique: true,
          },
          {
            name: "balance",
            type: "numeric",
          },
          {
            name: "active",
            type: "boolean",
            default: "true",
          },
          {
            name: "additional_info",
            type: "simple-json",
            // value: {
            //   age: "number",
            //   hair_color: "string";
            // },
            isNullable: true,
          },
          {
            name: "family_member",
            type: "string",
            isArray: true,
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
          {
            name: "updated_at",
            type: "timestamp",
            default: "now()",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("teller");
  }
}
