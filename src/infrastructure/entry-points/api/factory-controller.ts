import { Mapping, Get, Param } from '@tsclean/core';
import { FactoryService } from '@/domain/use-cases/factory-service';
import { FactoryEntity } from '@/domain/entities/factory';

@Mapping('api/v1/factories')
export class FactoryController {
  constructor(private readonly factoryService: FactoryService) {}

  @Get(':id')
  async getFactoryById(@Param('id') id: string): Promise<FactoryEntity | null> {
    return this.factoryService.getFactoryById(id);
  }
}
