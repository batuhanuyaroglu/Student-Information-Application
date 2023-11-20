import { Student } from "../../../entities";
import { IGenericService } from "./generic-service.interface";

// The IStudentService interface contains methods specific to the student entity.

export interface IStudentService extends IGenericService<Student> {}
