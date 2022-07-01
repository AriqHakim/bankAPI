import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class client1656648389355 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "client",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          {
            name: "first_name",
            type: "character varying",
          },
          {
            name: "last_name",
            type: "character varying",
          },
          {
            name: "email",
            type: "character varying",
            isUnique: true,
          },
          {
            name: "card_number",
            type: "character varying",
            length: "10",
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
            type: "json",
            isNullable: true,
          },
          {
            name: "family_member",
            type: "character varying",
            isArray: true,
            isNullable: true,
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
      }),
      true
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("client");
  }
}
