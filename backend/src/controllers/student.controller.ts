// It processes incoming HTTP requests and performs CRUD operations on the student entity.


import { CreateStudentDto } from "../dtos/user/create-student.dto";
import { Request, Response, NextFunction } from "express";
import { StudentService } from "../app";
import { plainToInstance } from "class-transformer";
import { Student } from "../entities";
import { validationResult } from "express-validator";
import { UpdateStudentDto } from "dtos";

const studentService = new StudentService();

export class StudentController {
  public async create(req: Request, res: Response, next: NextFunction) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const body: CreateStudentDto = req.body;
      res
        .status(201)
        .json(await studentService.create(plainToInstance(Student, body)));  // plainToInstance: It is used to translate data received from the outside world into an instance of a class.
    } catch (error) {
      res.status(500).json("Student Couldn't Created");
    }
  }

  public async find(req: Request, res: Response, next: NextFunction) {
    try {
      res.status(200).json(await studentService.find());
    } catch (error) {
      res.status(500).json("error");
    }
  }

  public async findOne(req: Request, res: Response, next: NextFunction) {
    try {
      res.status(200).json(
        await studentService.findOne({
          where: { id: parseInt(req.params.id) },
        })
      );
    } catch (error) {}
  }

  public async update(req: Request, res: Response, next: NextFunction) {
    try {
        const body: UpdateStudentDto = req.body;
      res.status(200).json(
        await studentService.updateOne(
            parseInt(req.params.id), 
            plainToInstance(Student, body) // It takes student as an example from body.
        )
           
       
      )
    } catch (error) {}
  }

  public async deleteOne(req: Request, res: Response, next: NextFunction){
    try{
        await studentService.deleteOne(parseInt(req.params.id));
        res.status(200).json(
            "Student Deleted"
        )
    } catch (error) {}
  } 

  
}
