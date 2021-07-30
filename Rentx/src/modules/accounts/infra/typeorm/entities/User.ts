import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm'
import { Expose } from 'class-transformer'
@Entity('users')
class User{
    @PrimaryGeneratedColumn('uuid')
    id:string

    @Column()
    name:string

    @Column()
    email:string

    @Column()
    password:string

    @Column()
    driver_license:string

    @Column()
    isAdmin:boolean

    @Column()
    avatar:string

    @CreateDateColumn()
    created_at:Date

    @Expose({name: "avatar_url"})
    avatar_url(){
        switch(process.env.disk){
            case 'local':
                return `${process.env.API_LOCAL_URL}/avatar/${this.avatar}`
            case 's3':
                return `${process.env.AWS_BUCKET_URL}/avatar/${this.avatar}`
            default:
                return null
        }
    }
}

export default User