import { SprocketEntity } from '@/domain/entities/sprocket';

export const SPROCKET_REPOSITORY = 'SPROCKET_REPOSITORY';

export interface ISprocketRepository {
  getAllSprockets(): Promise<SprocketEntity[]>;
}