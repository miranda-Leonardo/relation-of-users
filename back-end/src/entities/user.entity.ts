import { 
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    OneToOne,
    JoinColumn
} from 'typeorm'
import { AdditionalData } from './additional-data.entity'

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

    @OneToOne( () => AdditionalData )
    @JoinColumn()
    additional_data: AdditionalData
}

export { User }
