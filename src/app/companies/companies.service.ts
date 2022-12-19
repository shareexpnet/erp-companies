import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { CompanyEntity } from './entities/company.entity';
import { Company } from './interfaces/company.interface';
import { FindOneOptions, Repository } from 'typeorm';

@Injectable()
export class CompaniesService {
  constructor(
    @InjectRepository(CompanyEntity)
    private readonly companyRepository: Repository<Company>,
  ) {}

  async create(data: CreateCompanyDto) {
    const company = this.companyRepository.create(data);
    return await this.companyRepository.save(company);
  }

  async findAll() {
    return await this.companyRepository.find();
  }

  async findOneOrFail(options: FindOneOptions<CompanyEntity>) {
    try {
      return await this.companyRepository.findOneOrFail(options);
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
    this.companyRepository.merge(company, data);
    return await this.companyRepository.save(company);
  }

  async remove(id: string) {
    await this.findOneOrFail({
      where: {
        id: id,
      },
    });
    this.companyRepository.softDelete({ id });
  }
}
