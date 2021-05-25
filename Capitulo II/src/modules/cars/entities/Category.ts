import { v4 } from 'uuid'
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('categories')
class Category{
    @PrimaryGeneratedColumn('uuid')
    id?:string

    @Column()
    name:string
    
    @Column()
    description:string
    
    @CreateDateColumn()
    created_at:Date


    constructor(name:string, description:string,created_at:Date){
        if(!this.id){
            this.id = v4()
        }

        this.name = name
        this.description = description
        this.created_at = created_at
    }
}


export default Category
