import { User } from "../../entities";
import { GenericRepository } from "./generic.repository";
import { IUserRepository } from "./interfaces";

// This repository class performs CRUD operations on user data in the database.


export class UserRepository
  extends GenericRepository<User>
  implements IUserRepository
{
  constructor() {
    super(User);
  }
}
