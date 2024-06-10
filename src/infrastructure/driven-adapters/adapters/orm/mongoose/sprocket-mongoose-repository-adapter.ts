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

  async createSprocket(sprocket: SprocketEntity): Promise<SprocketEntity> {
    const newSprocket = new SprocketModel(sprocket);
    return newSprocket.save();
  }

  async updateSprocketById(id: string, sprocket: Partial<SprocketEntity>): Promise<SprocketEntity | null> {
    const updatedSprocket = await SprocketModel.findByIdAndUpdate(id, sprocket, { new: true }).lean().exec();
    return updatedSprocket;
  }
}
