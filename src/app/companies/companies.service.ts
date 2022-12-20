import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { CompanyEntity } from './entities/company.entity';
import { Company } from './interfaces/company.interface';
import { FindOneOptions, Repository } from 'typeorm';
import {
  IPaginationOptions,
  Pagination,
  paginate,
} from 'nestjs-typeorm-paginate';

@Injectable()
export class CompaniesService {
  constructor(
    @InjectRepository(CompanyEntity)
    private readonly companiesRepository: Repository<Company>,
  ) {}

  async create(data: CreateCompanyDto) {
    const company = this.companiesRepository.create(data);
    return await this.companiesRepository.save(company);
  }

  async findAll(option: IPaginationOptions): Promise<Pagination<Company>> {
    return paginate<Company>(this.companiesRepository, option);
  }

  async findOneOrFail(options: FindOneOptions<CompanyEntity>) {
    try {
      return await this.companiesRepository.findOneOrFail(options);
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async update(id: string, data: UpdateCompanyDto) {
    const company = await this.findOneOrFail({
      where: {
        id: id,
      },
    });
    this.companiesRepository.merge(company, data);
    return await this.companiesRepository.save(company);
  }

  async remove(id: string) {
    await this.findOneOrFail({
      where: {
        id: id,
      },
    });
    this.companiesRepository.softDelete({ id });
  }
}
