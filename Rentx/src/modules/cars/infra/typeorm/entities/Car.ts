import { Column, CreateDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm"
import Category from "./Category"
import Specification from "./Specification"

@Entity('cars')
class Car{

    @PrimaryGeneratedColumn('uuid')
    id:string

    @Column()
    name:string

    @Column()
    available:boolean
    
    @Column()
    description:string
    
    @Column()
    daily_rate:number
    
    @Column()
    license_plate:string
    
    @Column()
    fine_amount:number

    @ManyToMany(() => Category)
    @JoinColumn({name: 'category_id'})
    category:Category

    @ManyToMany(() => Specification)
    @JoinTable({
        name: 'specifications_cars',
        joinColumns:[{name:'car_id'}],
        inverseJoinColumns:[{name: 'specificatino_id'}]
    })
    specifications:Specification[]
    
    @Column()
    brand:string
    
    @Column()
    category_id:string

    @CreateDateColumn()
    created_at:Date
}

export default Car