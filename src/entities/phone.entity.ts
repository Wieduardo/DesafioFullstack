import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm'
import { User } from './user.entity'

@Entity('phones')
class Phone{
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({unique: true})
    number: string

    @ManyToOne(() => User)
    user: User
}

export { Phone }