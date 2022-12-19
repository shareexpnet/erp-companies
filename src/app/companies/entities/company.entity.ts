import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'companies' })
export class CompanyEntity {
  @PrimaryGeneratedColumn('uuid')
  @ApiProperty()
  id: string;

  @Column({ name: 'corporate_name', type: 'varchar', length: 100 })
  @ApiProperty()
  corporateName: string;

  @Column({ name: 'trading_name', type: 'varchar', length: 100, default: '' })
  @ApiProperty()
  tradingName: string;

  @Column({
    name: 'federal_document',
    type: 'varchar',
    length: 25,
    default: '',
  })
  @ApiProperty()
  federalDocument: string;

  @Column({ name: 'state_document', type: 'varchar', length: 25, default: '' })
  @ApiProperty()
  stateDocument: string;

  @Column({
    name: 'municipal_document',
    type: 'varchar',
    length: 25,
    default: '',
  })
  @ApiProperty()
  municipalDocument: string;

  @Column({ name: 'cnae_number', type: 'varchar', length: 15, default: '' })
  @ApiProperty()
  cnaeNumber: string;

  @Column({ type: 'varchar', length: 100, default: '' })
  @ApiProperty()
  address: string;

  @Column({ name: 'number_address', type: 'varchar', length: 15, default: '' })
  @ApiProperty()
  numberAddress: string;

  @Column({ type: 'varchar', length: 50, default: '' })
  @ApiProperty()
  complement: string;

  @Column({ type: 'varchar', length: 50, default: '' })
  @ApiProperty()
  district: string;

  @Column({ type: 'varchar', length: 50, default: '' })
  @ApiProperty()
  city: string;

  @Column({ type: 'varchar', length: 2, default: '' })
  @ApiProperty()
  uf: string;

  @Column({ type: 'varchar', length: 12, default: '' })
  @ApiProperty()
  cep: string;

  @Column({ name: 'ibge_id', type: 'int', default: 0 })
  @ApiProperty()
  ibgeId: number;

  @Column({ type: 'varchar', length: 15, default: '' })
  @ApiProperty()
  phone: string;

  @Column({ type: 'varchar', length: 15, default: '' })
  @ApiProperty()
  cell: string;

  @Column({ type: 'varchar', length: 150, default: '' })
  @ApiProperty()
  email: string;

  @Column({ type: 'varchar', length: 150, default: '' })
  @ApiProperty()
  home: string;

  @Column({ default: '' })
  @ApiProperty()
  observation: string;

  @Column({ type: 'varchar', length: 50, default: '' })
  @ApiProperty()
  token: string;

  @Column({ type: 'varchar', length: 50, default: '' })
  @ApiProperty()
  image: string;

  @Column({ name: 'is_active', type: 'tinyint', default: 1 })
  @ApiProperty()
  isActive: boolean;

  @CreateDateColumn({ name: 'created_at' })
  @ApiProperty()
  createdAt: string;

  @UpdateDateColumn({ name: 'updated_at' })
  @ApiProperty()
  updatedAt: string;

  @DeleteDateColumn({ name: 'deleted_at' })
  @ApiProperty()
  deletedAt: string;

  constructor(company?: Partial<CompanyEntity>) {
    this.id = company?.id;
    this.corporateName = company?.corporateName;
    this.tradingName = company?.tradingName;
    this.federalDocument = company?.federalDocument;
    this.stateDocument = company?.stateDocument;
    this.municipalDocument = company?.municipalDocument;
    this.cnaeNumber = company?.cnaeNumber;
    this.address = company?.address;
    this.numberAddress = company?.numberAddress;
    this.complement = company?.complement;
    this.district = company?.district;
    this.city = company?.city;
    this.uf = company?.uf;
    this.cep = company?.cep;
    this.ibgeId = company?.ibgeId;
    this.phone = company?.phone;
    this.cell = company?.cell;
    this.email = company?.email;
    this.home = company?.home;
    this.observation = company?.observation;
    this.token = company?.token;
    this.image = company?.image;
    this.isActive = company?.isActive;
    this.createdAt = company?.createdAt;
    this.updatedAt = company?.updatedAt;
    this.deletedAt = company?.deletedAt;
  }
}
