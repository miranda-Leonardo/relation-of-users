import { 
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    OneToOne,
    JoinColumn,
    OneToMany
} from 'typeorm'
import { AdditionalData } from './additional-data.entity'
import { Contact } from './contact.entity'

@Entity('users')
class User {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ length: 250 })
    full_name: string

    @Column({ unique: true })
    email: string

    @Column({ length: 11 })
    telephone: string

    @CreateDateColumn()
    registerAt: Date

    @OneToOne( () => AdditionalData )
    @JoinColumn()
    additional_data: AdditionalData

    @OneToMany( () => Contact, (Contact) => Contact.user )
    contacts: Contact[]
}

export { User }
