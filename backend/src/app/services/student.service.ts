// Performs general CRUD operations for the student entity.

import { Student } from "../../entities";
import { StudentRepository} from "../repositories";
import { GenericService } from "./generic.service";
import { IStudentService} from "./interfaces";

export class StudentService
	extends GenericService<Student>
	implements IStudentService
{
    
	constructor() {
		super(new StudentRepository());
	}
}