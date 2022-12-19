import { OmitType, PartialType } from '@nestjs/swagger';
import { CompanyEntity } from '../entities/company.entity';

export class FindCompanySwagger extends PartialType(
  OmitType(CompanyEntity, ['createdAt', 'updatedAt', 'deletedAt']),
) {}
