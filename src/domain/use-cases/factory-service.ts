import { Service } from '@tsclean/core';
import { FactoryEntity } from '@/domain/entities/factory';
import { FactoryRepository } from '@/domain/entities/contracts/factory-repository';

@Service()
export class FactoryService {
  constructor(private readonly factoryRepository: FactoryRepository) {}

  async getFactoryById(id: string): Promise<FactoryEntity | null> {
    return this.factoryRepository.getFactoryById(id);
  }
}
