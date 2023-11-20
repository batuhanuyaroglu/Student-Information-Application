import { User } from "../../../entities";
import { IGenericService } from "./generic-service.interface";

// The IUsertService interface contains methods specific to the user entity.

export interface IUserService extends IGenericService<User> {}
