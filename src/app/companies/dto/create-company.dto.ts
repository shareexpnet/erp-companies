import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateCompanyDto {
  @IsNotEmpty()
  @ApiProperty()
  corporateName: string;

  @IsOptional()
  @ApiPropertyOptional()
  tradingName?: string;

  @IsOptional()
  @ApiPropertyOptional()
  federalDocument?: string;

  @IsOptional()
  @ApiPropertyOptional()
  stateDocument?: string;

  @IsOptional()
  @ApiPropertyOptional()
  municipalDocument?: string;

  @IsOptional()
  @ApiPropertyOptional()
  cnaeNumber?: string;

  @IsOptional()
  @ApiPropertyOptional()
  address?: string;

  @IsOptional()
  @ApiPropertyOptional()
  numberAddress?: string;

  @IsOptional()
  @ApiPropertyOptional()
  complement?: string;

  @IsOptional()
  @ApiPropertyOptional()
  district?: string;

  @IsOptional()
  @ApiPropertyOptional()
  city?: string;

  @IsOptional()
  @ApiPropertyOptional()
  uf?: string;

  @IsOptional()
  @ApiPropertyOptional()
  cep?: string;

  @IsOptional()
  @ApiPropertyOptional()
  ibgeId?: number;

  @IsOptional()
  @ApiPropertyOptional()
  phone?: string;

  @IsOptional()
  @ApiPropertyOptional()
  cell?: string;

  @IsOptional()
  @IsEmail()
  @ApiPropertyOptional()
  email?: string;

  @IsOptional()
  @ApiPropertyOptional()
  home?: string;

  @IsOptional()
  @ApiPropertyOptional()
  observation?: string;

  @IsNotEmpty()
  @ApiProperty()
  token?: string;

  @IsOptional()
  @ApiPropertyOptional()
  image?: string;

  @IsOptional()
  @ApiPropertyOptional()
  isActive?: boolean;
}
