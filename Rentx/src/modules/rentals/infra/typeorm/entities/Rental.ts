import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity('rentals')
class Rental{
    @PrimaryGeneratedColumn('uuid')
    id:string

    @Column()
    car_id:string

    @Column()
    user_id:string

    @Column()
    start_date:Date

    @Column()
    end_date:Date

    @Column()
    expected_date:Date

    @Column()
    total:number

    @CreateDateColumn()
    created_at:Date
}

export default Rental