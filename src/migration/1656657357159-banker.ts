import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export class banker1656657357159 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "banker",
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
            name: "employee_number",
            type: "character varying",
            length: "10",
            isUnique: true,
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
    await queryRunner.dropTable("banker");
  }
}
