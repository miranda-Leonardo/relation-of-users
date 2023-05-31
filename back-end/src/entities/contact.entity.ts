import {
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn
} from 'typeorm';
import { User } from './user.entity';

@Entity( 'contacts' )
class Contact {
  @PrimaryGeneratedColumn( 'uuid' )
  id: string;

  @OneToOne(()=> User )
  @JoinColumn()
  contact: User

  @ManyToOne(() => User, ( user ) => user.contacts, { onDelete: 'CASCADE'})
  user: User;
}

export { Contact };
