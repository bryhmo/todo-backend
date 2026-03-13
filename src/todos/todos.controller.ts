import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { TodosService } from './todos.service';

@Controller('todos')
@UseGuards(AuthGuard('jwt'))
export class TodosController {
  constructor(private todosService: TodosService) {}

  @Get()
  findAll(@Request() req) {
    return this.todosService.findAll(req.user.id);
  }

  @Post()
  create(@Request() req, @Body() body) {
    return this.todosService.create(req.user.id, body);
  }

  @Put(':id')
  update(@Param('id') id: number, @Request() req, @Body() body) {
    return this.todosService.update(id, req.user.id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: number, @Request() req) {
    return this.todosService.remove(id, req.user.id);
  }
}