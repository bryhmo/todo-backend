import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Todo } from './todo.entity';

@Injectable()
export class TodosService {
  constructor(@InjectRepository(Todo) private todoRepo: Repository<Todo>) {}

  async findAll(userId: number) {
    return this.todoRepo.find({ where: { user: { id: userId } }, order: { createdAt: 'DESC' } });
  }

  async create(userId: number, data: Partial<Todo>) {
    const todo = this.todoRepo.create({ ...data, user: { id: userId } });
    return this.todoRepo.save(todo);
  }

  async update(id: number, userId: number, data: Partial<Todo>) {
    const todo = await this.todoRepo.findOne({ where: { id, user: { id: userId } } });
    if (!todo) throw new NotFoundException('Todo not found');
    Object.assign(todo, data);
    return this.todoRepo.save(todo);
  }

  async remove(id: number, userId: number) {
    const todo = await this.todoRepo.findOne({ where: { id, user: { id: userId } } });
    if (!todo) throw new NotFoundException('Todo not found');
    return this.todoRepo.remove(todo);
  }
}