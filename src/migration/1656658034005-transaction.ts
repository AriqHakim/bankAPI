import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export class transaction1656658034005 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "transaction",
        columns: [
          {
            name: "id",
            type: "int",
            isGenerated: true,
            generationStrategy: "increment",
          },
          {
            name: "type",
            type: "character varying",
          },
          {
            name: "amount",
            type: "numeric",
          },
          {
            name: "client_id",
            type: "int",
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

    await queryRunner.createForeignKey(
      "transaction",
      new TableForeignKey({
        columnNames: ["client_id"],
        referencedColumnNames: ["id"],
        referencedTableName: "client",
        onDelete: "CASCADE",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const table = await queryRunner.getTable("transaction");
    if (table) {
      const clientFK = table.foreignKeys.find(
        (fk) => fk.columnNames.indexOf("client_id") !== -1
      );
      if (clientFK) {
        await queryRunner.dropForeignKey("transaction", clientFK);
        await queryRunner.dropTable("transaction");
      }
    }
    await queryRunner.dropColumn("transaction", "client_id");
    await queryRunner.dropTable("transaction");
  }
}
