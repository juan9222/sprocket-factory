import { SprocketEntity } from '@/domain/entities/sprocket';

export const SPROCKET_SERVICE = 'SPROCKET_SERVICE';

export interface ISprocketService {
  getSprocketById(id: string): Promise<SprocketEntity | null>;
  getAllSprockets(): Promise<SprocketEntity[]>;
}