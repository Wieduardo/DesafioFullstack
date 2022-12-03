import {Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, OneToMany} from 'typeorm'
import { Contact } from './contact.entity'

@Entity('users')
class User{

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ unique: true })
    name: string

    @Column({ length: 120})
    password: string

    @Column({unique: true})
    email: string

    @Column()
    phone: string

    @OneToMany((type) => Contact, (Contact) => Contact.user,{
        onDelete: "SET NULL",
        nullable: true 
    })
    contacts: Contact[]

    @CreateDateColumn()
    createdAt: Date

}

export {User}