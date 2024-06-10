import { SprocketEntity } from '@/domain/entities/sprocket';

export const SPROCKET_REPOSITORY = 'SPROCKET_REPOSITORY';

export interface ISprocketRepository {
  getSprocketById(id: string): Promise<SprocketEntity | null>;
  getAllSprockets(): Promise<SprocketEntity[]>;
  createSprocket(sprocket: SprocketEntity): Promise<SprocketEntity>;
  updateSprocketById(id: string, sprocket: Partial<SprocketEntity>): Promise<SprocketEntity | null>;
}