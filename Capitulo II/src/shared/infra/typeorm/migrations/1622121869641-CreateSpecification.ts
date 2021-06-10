import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateSpecification1622121869641 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'specifications',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary:true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()'

                    },
                    {
                        name: 'name',
                        type: 'varchar'
                    },
                    {
                        name:'description',
                        type:'varchar'
                    },
                    {
                        name: 'created_at',
                        type:'timestamp',
                        default: 'now()'
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('specifications')
    }

}
