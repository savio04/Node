import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateCarImages1624036856769 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'cars_image',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()'
                    },
                    {
                        name: 'car_id',
                        type: 'uuid'
                    },
                    {
                        name: 'image_name',
                        type: 'varchar'
                    }, 
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()'
                    }
                ],
                foreignKeys:[
                    {
                        name: 'car_image_fk',
                        referencedTableName: 'cars',
                        referencedColumnNames: ['id'],
                        columnNames: ['car_id'],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('cars_image')
    }

}
