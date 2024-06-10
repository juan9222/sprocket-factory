import { Mapping, Get, Param, Adapter } from '@tsclean/core';
import { IFactoryService, FACTORY_SERVICE } from '@/domain/use-cases/factory-service';
import { FactoryEntity } from '@/domain/entities/factory';

@Mapping('api/v1/factories')
export class FactoryController {
  constructor(
    @Adapter(FACTORY_SERVICE)
    private readonly factoryService: IFactoryService
  ) {}

  @Get(':id')
  async getFactoryById(@Param('id') id: string): Promise<FactoryEntity | null> {
    return this.factoryService.getFactoryById(id);
  }
}
