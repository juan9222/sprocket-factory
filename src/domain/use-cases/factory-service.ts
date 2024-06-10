import { FactoryEntity } from '@/domain/entities/factory';

export const FACTORY_SERVICE = 'FACTORY_SERVICE';

export interface IFactoryService {
  getFactoryById(id: string): Promise<FactoryEntity | null>;
}
