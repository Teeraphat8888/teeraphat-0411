import {Entity,PrimaryGeneratedColumn,Column,ManyToOne,CreateDateColumn,UpdateDateColumn,} from 'typeorm';
import { User } from './user.entity';

@Entity({name:'category'})
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @Column()
  type: string;

  @ManyToOne(() => User, (user) => user.id, { nullable: true })
  user: User;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
