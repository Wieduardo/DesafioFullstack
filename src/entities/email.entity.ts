import { Entity, PrimaryGeneratedColumn, Column, ManyToOne} from 'typeorm'
import { User } from './user.entity'

@Entity('emails')
class Email{
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({unique: true})
    email: string

    @ManyToOne(() => User)
    user: User
}

export { Email }