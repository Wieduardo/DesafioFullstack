import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm'
import { User } from './user.entity'

@Entity('contacts')
class Contact{
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    name: string

    @Column()
    email: string

    @Column()
    number: string

    @ManyToOne(() => User, (User) => User.contacts, {
		onDelete: "SET NULL",
	})
    user: User
}

export { Contact }