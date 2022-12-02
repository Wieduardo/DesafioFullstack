import {Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, OneToMany} from 'typeorm'
import { Phone } from './phone.entity'
import { Email } from './email.entity'

@Entity('users')
class User{

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ unique: true })
    name: string

    @Column({ length: 120})
    password: string

    @OneToMany(() => Email, Email => Email.user)
    emails: Email[]

    @OneToMany(() => Phone, Phone => Phone.user)
    phones: Phone[]

    @CreateDateColumn()
    createdAt: Date

}

export {User}