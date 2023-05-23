import {
    Column,
    Entity,
    PrimaryGeneratedColumn
} from 'typeorm'

@Entity('additional-data')
class AdditionalData {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    email: string

    @Column({ length: 11 })
    telephone: number
}

export { AdditionalData }
