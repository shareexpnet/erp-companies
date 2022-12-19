import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { CompaniesModule } from './app/companies/companies.module';

@Module({
  imports: [ConfigModule.forRoot(), DatabaseModule, CompaniesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
