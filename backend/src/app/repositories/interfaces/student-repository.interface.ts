// Contains database operations related to student objects.
import { Student } from "entities";
import { IGenericRepository } from "./generic-repository.interface";

export interface IStudentRepository extends IGenericRepository<Student> {}
