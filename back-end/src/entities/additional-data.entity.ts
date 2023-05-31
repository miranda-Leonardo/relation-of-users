import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user.entity';

@Entity( 'additional-data' )
class AdditionalData {
  @PrimaryGeneratedColumn( 'uuid' )
  id: string;

  @Column()
  email: string;

  @Column()
  telephone: string;
}

export { AdditionalData };
