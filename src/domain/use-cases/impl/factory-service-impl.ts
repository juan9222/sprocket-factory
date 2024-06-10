import { Service, Adapter } from '@tsclean/core';
import { FactoryEntity } from '@/domain/entities/factory';
import { IFactoryService } from '@/domain/use-cases/factory-service';
import { FACTORY_REPOSITORY, IFactoryRepository } from '@/domain/entities/contracts/factory-repository';

@Service()
export class FactoryServiceImpl implements IFactoryService {
  constructor(
    @Adapter(FACTORY_REPOSITORY)
    private readonly factoryRepository: IFactoryRepository
  ) {}

  async getFactoryById(id: string): Promise<FactoryEntity | null> {
    return this.factoryRepository.getFactoryById(id);
  }
}
