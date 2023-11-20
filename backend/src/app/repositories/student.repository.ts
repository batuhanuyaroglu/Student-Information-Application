import { Student } from "../../entities";
import { GenericRepository } from "./generic.repository";
import { IStudentRepository } from "./interfaces";

// This repository class performs CRUD operations on student data in the database.

export class StudentRepository
  extends GenericRepository<Student>
  implements IStudentRepository
{
  constructor() {
    super(Student);
  }
}