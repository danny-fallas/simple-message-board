import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Message } from '@models/Message';

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    fullName!: string

    @Column()
    createdAt!: Date

    @OneToMany(() => Message, (message) => message.user)
    messages!: Message[]
}
