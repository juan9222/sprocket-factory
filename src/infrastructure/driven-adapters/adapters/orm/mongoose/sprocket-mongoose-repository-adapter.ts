import { ISprocketRepository } from '@/domain/entities/contracts/sprocket-repository';
import { SprocketEntity } from '@/domain/entities/sprocket';
import { SprocketModel } from './models/sprocket';

export class SprocketMongooseRepositoryAdapter implements ISprocketRepository {
  async getSprocketById(id: string): Promise<SprocketEntity | null> {
    const sprocket = await SprocketModel.findById(id).lean().exec();
    return sprocket ? { ...sprocket, id: sprocket._id.toString() } : null;
  }
  
  async getAllSprockets(): Promise<SprocketEntity[]> {
    const sprockets = await SprocketModel.find().lean().exec();
    return sprockets.map(sprocket => ({
      ...sprocket,
      id: sprocket._id.toString()
    }));
  }
}
