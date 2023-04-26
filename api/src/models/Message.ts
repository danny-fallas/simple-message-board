import { Entity, PrimaryGeneratedColumn, Column, Index, ManyToOne } from 'typeorm';
import { User } from '@models/User';

@Entity()
export class Message {

    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    text!: string

    @Column()
    createdAt!: Date

    @Index()
    @ManyToOne(() => User, (user) => user.messages, {
        onDelete: 'CASCADE',
        eager: true,
    })
    user!: User | null;

}
