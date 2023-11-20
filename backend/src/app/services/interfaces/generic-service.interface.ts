import {
	FindManyOptions,
	FindOneOptions,
	DeleteResult,
	UpdateResult,
} from "typeorm";
//  The type parameter T indicates that this interface is generally used to represent a database entity.
export interface IGenericService<T> {
	find(options?: FindManyOptions<T>): Promise<T[]>;
	create(body: T): Promise<T>;
	findOne(options: FindOneOptions<T>): Promise<T | null>;
	deleteOne(id: number): Promise<DeleteResult>;
	updateOne(id: number, body: T): Promise<T>;
}
