import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('api_config')
export class ApiConfigEntity {
  @PrimaryColumn()
  id: number;

  @Column()
  name: string;
}