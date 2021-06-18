import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateSpecificationCars1623967966414 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'specifications_cars',
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
                        name: 'specification_id',
                        type: 'uuid'
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()'
                    }
                ]
            })
        )

        await queryRunner.createForeignKey('specifications_cars',
            new TableForeignKey({
                name: 'specification_car_fk',
                referencedTableName: 'specifications',
                referencedColumnNames: ['id'],
                columnNames: ['specification_id'],
                onDelete: 'SET NULL',
                onUpdate: 'SET NULL'
            })
        )

        await queryRunner.createForeignKey('specifications_cars',
            new TableForeignKey({
                name: 'specification_fk',
                referencedTableName: 'cars',
                referencedColumnNames: ['id'],
                columnNames: ['car_id'],
                onDelete: 'SET NULL',
                onUpdate: 'SET NULL'
            })
        )

        
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey(
            "specifications_cars",
            "specification_car_fk"
        )

        await queryRunner.dropForeignKey(
            "specifications_cars",
            "specification_fk"
        )
        
        await queryRunner.dropTable('specifications_cars')
    }

}
