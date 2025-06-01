import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from 'src/entities';
import { Repository } from 'typeorm';
import { CategoryDto } from './dto/category.dto';

@Injectable()
export class CategoryService {
  constructor(@InjectRepository(Category) private repo: Repository<Category>) {}

  findAll() {
    return this.repo.find();
  }

  create(data: Partial<CategoryDto>) {
    const { userId, ...rest } = data;
    const entity = this.repo.create({
      ...rest,
      user: { id: userId },
    });
    return this.repo.save(entity);
  }
}
