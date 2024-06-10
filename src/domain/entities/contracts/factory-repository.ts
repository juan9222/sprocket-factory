export const FACTORY_REPOSITORY = 'FACTORY_REPOSITORY';

export interface FactoryRepository {
  getFactoryById(id: string): Promise<FactoryEntity | null>;
}
