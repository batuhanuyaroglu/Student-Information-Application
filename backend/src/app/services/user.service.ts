// Performs general CRUD operations for the user entity.

import { User } from "../../entities";
import { UserRepository } from "../repositories";
import { GenericService } from "./generic.service";
import { IUserService } from "./interfaces";

export class UserService
	extends GenericService<User>
	implements IUserService
{
	constructor() {
		super(new UserRepository());
	}
}
