import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
