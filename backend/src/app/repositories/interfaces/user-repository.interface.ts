// Contains database operations related to user objects.

import { User } from "entities";
import { IGenericRepository } from "./generic-repository.interface";

export interface IUserRepository extends IGenericRepository<User> {}
