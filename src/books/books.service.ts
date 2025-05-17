import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from './entities/book.entity';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book) private readonly bookRepository: Repository<Book>,
  ) {}

  async create(createBook: CreateBookDto): Promise<Book> {
    return this.bookRepository.save(createBook);
  }

  async findAll(): Promise<Book[]> {
    const books = await this.bookRepository.find();
    console.log('Books:', books);
    return books;
  }

  async findOne(id: number): Promise<Book | null> {
    return this.bookRepository.findOneBy({ id });
  }

  async update(id: number, updateBook: UpdateBookDto): Promise<Book | null> {
    await this.bookRepository.update(id, updateBook);
    return this.findOne(id);
  }

  async remove(id: number): Promise<Book[]> {
    await this.bookRepository.delete(id);
    return this.bookRepository.find();
  }
}
