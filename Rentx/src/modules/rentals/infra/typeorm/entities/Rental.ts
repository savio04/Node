import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import Car from "../../../../cars/infra/typeorm/entities/Car"

@Entity('rentals')
class Rental{
    @PrimaryGeneratedColumn('uuid')
    id:string

    @ManyToOne(() => Car)
    @JoinColumn({name: 'car_id'})
    car:Car

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