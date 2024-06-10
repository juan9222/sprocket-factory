import { SprocketEntity } from '@/domain/entities/sprocket';

export const SPROCKET_SERVICE = 'SPROCKET_SERVICE';

export interface ISprocketService {
  getAllSprockets(): Promise<SprocketEntity[]>;
}