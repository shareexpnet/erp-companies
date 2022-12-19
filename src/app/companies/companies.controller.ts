import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  ParseUUIDPipe,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { CompaniesService } from './companies.service';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { MessagesHelper } from 'src/helpers/messages/message.helper';
import { CreateCompanySwagger } from './swagger/create-company.swagger';
import { BadRequestSwagger } from 'src/helpers/swagger/bad-request.swagger';
import { FindCompanySwagger } from './swagger/find-company.swagger';
import { NotFoundSwagger } from 'src/helpers/swagger/not-found.swagger';
import { UpdateCompanySwagger } from './swagger/update-company.swagger';

@Controller('companies')
export class CompaniesController {
  constructor(private readonly companiesService: CompaniesService) {}

  @Post()
  @ApiOperation({
    summary: MessagesHelper.POST_SUCCESS,
  })
  @ApiResponse({
    status: 201,
    description: MessagesHelper.POST_201,
    type: CreateCompanySwagger,
  })
  @ApiResponse({
    status: 400,
    description: MessagesHelper.POST_PUT_400,
    type: BadRequestSwagger,
  })
  async create(@Body() body: CreateCompanyDto) {
    return await this.companiesService.create(body);
  }

  @Get()
  @ApiOperation({
    summary: MessagesHelper.GET_ALL_SUCCESS,
  })
  @ApiResponse({
    status: 200,
    description: MessagesHelper.GET_ALL_200,
    type: FindCompanySwagger,
    isArray: true,
  })
  async findAll() {
    return await this.companiesService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: MessagesHelper.GET_ONE_SUCCESS,
  })
  @ApiResponse({
    status: 200,
    description: MessagesHelper.GET_ONE_200,
    type: FindCompanySwagger,
  })
  @ApiResponse({
    status: 400,
    description: MessagesHelper.GET_ONE_400,
    type: BadRequestSwagger,
  })
  @ApiResponse({
    status: 404,
    description: MessagesHelper.GET_ONE_404,
    type: NotFoundSwagger,
  })
  async findOne(@Param('id', new ParseUUIDPipe()) id: string) {
    return await this.companiesService.findOneOrFail({
      where: {
        id: id,
      },
    });
  }

  @Put(':id')
  @ApiOperation({ summary: MessagesHelper.POST_SUCCESS })
  @ApiResponse({
    status: 200,
    description: MessagesHelper.PUT_200,
    type: UpdateCompanySwagger,
  })
  @ApiResponse({
    status: 400,
    description: MessagesHelper.POST_PUT_400,
    type: BadRequestSwagger,
  })
  @ApiResponse({
    status: 404,
    description: MessagesHelper.PUT_DELETE_404,
    type: NotFoundSwagger,
  })
  async update(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() body: UpdateCompanyDto,
  ) {
    return await this.companiesService.update(id, body);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: MessagesHelper.DELETE_SUCCESS })
  @ApiResponse({
    status: 200,
    description: MessagesHelper.DELETE_200,
  })
  @ApiResponse({
    status: 404,
    description: MessagesHelper.PUT_DELETE_404,
    type: NotFoundSwagger,
  })
  async remove(@Param('id', new ParseUUIDPipe()) id: string) {
    return await this.companiesService.remove(id);
  }
}
