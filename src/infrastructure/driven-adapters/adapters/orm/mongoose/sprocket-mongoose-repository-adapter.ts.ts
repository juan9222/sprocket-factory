import { ISprocketRepository } from '@/domain/entities/contracts/sprocket-repository';
import { SprocketEntity } from '@/domain/entities/sprocket';
import { SprocketModel } from './models/sprocket';

export class SprocketMongooseRepositoryAdapter implements ISprocketRepository {
  async getAllSprockets(): Promise<SprocketEntity[]> {
    return SprocketModel.find().lean().exec();
  }
}
