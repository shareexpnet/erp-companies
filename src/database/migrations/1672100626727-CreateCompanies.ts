import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateCompanies1672100626727 implements MigrationInterface {
  name = 'CreateCompanies1672100626727';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`companies\` (\`id\` varchar(36) NOT NULL, \`corporate_name\` varchar(100) NOT NULL, \`trading_name\` varchar(100) NOT NULL DEFAULT '', \`federal_document\` varchar(25) NOT NULL DEFAULT '', \`state_document\` varchar(25) NOT NULL DEFAULT '', \`municipal_document\` varchar(25) NOT NULL DEFAULT '', \`cnae_number\` varchar(15) NOT NULL DEFAULT '', \`address\` varchar(100) NOT NULL DEFAULT '', \`number_address\` varchar(15) NOT NULL DEFAULT '', \`complement\` varchar(50) NOT NULL DEFAULT '', \`district\` varchar(50) NOT NULL DEFAULT '', \`city\` varchar(50) NOT NULL DEFAULT '', \`uf\` varchar(2) NOT NULL DEFAULT '', \`cep\` varchar(12) NOT NULL DEFAULT '', \`ibge_id\` int NOT NULL DEFAULT '0', \`phone\` varchar(15) NOT NULL DEFAULT '', \`cell\` varchar(15) NOT NULL DEFAULT '', \`email\` varchar(150) NOT NULL DEFAULT '', \`home\` varchar(150) NOT NULL DEFAULT '', \`observation\` varchar(255) NOT NULL DEFAULT '', \`token\` varchar(50) NOT NULL DEFAULT '', \`picture\` varchar(50) NOT NULL DEFAULT '', \`is_active\` tinyint NOT NULL DEFAULT '1', \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deleted_at\` datetime(6) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE \`companies_a\``);
  }
}
