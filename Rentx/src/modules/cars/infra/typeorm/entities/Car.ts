import { Column, CreateDateColumn, Entity, JoinColumn, ManyToMany, PrimaryGeneratedColumn } from "typeorm"
import Category from "./Category"

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
    
    @Column()
    brand:string
    
    @Column()
    category_id:string

    @CreateDateColumn()
    created_at:Date
}

export default Car