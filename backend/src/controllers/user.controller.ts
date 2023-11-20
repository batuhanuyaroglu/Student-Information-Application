// It processes incoming HTTP requests and performs CRUD operations on the user entity.

import { CreateUserDto } from "../dtos/user/create-user.dto";
import { Request, Response, NextFunction } from "express";
import { UserService } from "../app";
import { plainToInstance } from "class-transformer";
import { User } from "../entities";
import { validationResult } from "express-validator";
import { LoginUserDto } from "dtos/user/login-user.dto";
import { compare } from "bcrypt";

const userService = new UserService();

export class UserController {
  public async create(req: Request, res: Response, next: NextFunction) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const body: CreateUserDto = req.body;
      res
        .status(201)
        .json(await userService.create(plainToInstance(User, body)));
    } catch (error) {
      res.status(500).json("User Couldn't Created");
    }
  }

  public async find(req: Request, res: Response, next: NextFunction) {
    try {
      res.status(200).json(await userService.find());
    } catch (error) {
      res.status(500).json("error");
    }
  }

  public async findOne(req: Request, res: Response, next: NextFunction) {
    try {
      res.status(200).json(
        await userService.findOne({
          where: { id: parseInt(req.params.id) },
        })
      );
    } catch (error) {}
  }

  public async login(req: Request, res: Response, next: NextFunction) {
    try {
      const dto: LoginUserDto = req.body;
      const student = await userService.findOne({
        where: { email: dto.email },
      });
      if (!student) {
        res.status(404).json("User not Found !");
      } else {
        const success = await compare(dto.password, student.password);
        if (!success) {
          res.status(500).json("Your Password is Wrong!");
        } else {
          res
            .status(201)
            .json({ name: student.name, email: student.email, id: student.id });
        }
      }
    } catch (error) {
      res.status(500).json("Error happend while logging.");
    }
  }
}
