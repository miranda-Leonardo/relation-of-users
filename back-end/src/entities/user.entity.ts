import { 
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn
} from 'typeorm'

@Entity('users')
class User {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ length: 250 })
    full_name: string

    @Column()
    email: string

    @Column({ length: 11 })
    telephone: number

    @CreateDateColumn()
    registerAt: Date
}

export { User }
