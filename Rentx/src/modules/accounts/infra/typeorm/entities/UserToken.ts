import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import User from "./User";

@Entity('users_token')
class UserToken{
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    refresh_token: string

    @ManyToOne(() => User)
    @JoinColumn({name: 'user_id'})
    user:User

    @Column()
    user_id: string

    @Column()
    expires_date: Date 
    
    @CreateDateColumn()
    created_at: Date
}

export default UserToken