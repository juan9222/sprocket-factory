import { FactoryEntity } from '@/domain/entities/factory';

export const FACTORY_REPOSITORY = 'FACTORY_REPOSITORY';

export interface IFactoryRepository {
  getFactoryById(id: string): Promise<FactoryEntity | null>;
  getAllFactories(): Promise<FactoryEntity[]>;
}
