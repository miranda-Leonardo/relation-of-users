import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user.entity';

@Entity( 'contacts' )
class Contact {
  @PrimaryGeneratedColumn( 'uuid' )
  id: string;

  @Column({ unique: true })
  contact_userId: string;

  @ManyToOne(() => User, ( user ) => user.contacts )
  user: User;
}

export { Contact };
