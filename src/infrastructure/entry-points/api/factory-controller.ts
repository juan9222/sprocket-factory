import { Mapping, Get, Param, Adapter, HttpException, HttpStatus } from '@tsclean/core';
import { IFactoryService, FACTORY_SERVICE } from '@/domain/use-cases/factory-service';
import { FactoryEntity } from '@/domain/entities/factory';
import { Types } from 'mongoose';

@Mapping('api/v1/factories')
export class FactoryController {
  constructor(
    @Adapter(FACTORY_SERVICE)
    private readonly factoryService: IFactoryService
  ) {}

  @Get(':id')
  async getFactoryById(@Param('id') id: string): Promise<FactoryEntity | null> {
    if (!Types.ObjectId.isValid(id)) {
        throw new HttpException('Invalid ID format', HttpStatus.BAD_REQUEST);
      }
    return this.factoryService.getFactoryById(id);
  }
}
