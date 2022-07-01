import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export class bankerClient1656666440781 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "bankers_client",
        columns: [
          {
            name: "banker",
            type: "int",
          },
          {
            name: "client",
            type: "int",
          },
        ],
      }),
      true
    );

    await queryRunner.createForeignKey(
      "bankers_client",
      new TableForeignKey({
        columnNames: ["banker"],
        referencedColumnNames: ["id"],
        referencedTableName: "banker",
        onDelete: "CASCADE",
      })
    );

    await queryRunner.createForeignKey(
      "bankers_client",
      new TableForeignKey({
        columnNames: ["client"],
        referencedColumnNames: ["id"],
        referencedTableName: "client",
        onDelete: "CASCADE",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const table = await queryRunner.getTable("bankers_client");
    if (table) {
      const clientFKClient = table.foreignKeys.find(
        (fk) => fk.columnNames.indexOf("client") !== -1
      );
      if (clientFKClient) {
        await queryRunner.dropForeignKey("bankers_client", clientFKClient);
        await queryRunner.dropTable("bankers_client");
      }
      const clientFKBanker = table.foreignKeys.find(
        (fk) => fk.columnNames.indexOf("banker") !== -1
      );
      if (clientFKBanker) {
        await queryRunner.dropForeignKey("bankers_client", clientFKBanker);
        await queryRunner.dropTable("bankers_client");
      }
    }
    await queryRunner.dropColumn("bankers_client", "client");
    await queryRunner.dropColumn("bankers_client", "banker");
    await queryRunner.dropTable("bankers_client");
  }
}
