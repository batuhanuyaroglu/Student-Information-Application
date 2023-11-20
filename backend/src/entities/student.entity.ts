// The database table contains the fields required to record student information


import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: "students" })
export class Student {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false, unique: true })
  email: string;

  @Column({ type: "varchar" })
  phone: string;

  @Column({ type: "integer" })
  grade: number;

  @Column({ type: "varchar" })
  course: string;
}
