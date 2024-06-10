import { ISprocketService } from '@/domain/use-cases/sprocket-service';
import { SprocketEntity } from '@/domain/entities/sprocket';
import { Types } from 'mongoose';

export class SprocketServiceMock implements ISprocketService {
  private sprockets: SprocketEntity[] = [
    {
      id: '666775cefbd8abda8535d245',
      teeth: 10,
      pitch_diameter: 5,
      outside_diameter: 7,
      pitch: 2,
    },
    {
      id: '666775ce27064635c04ef1ee',
      teeth: 20,
      pitch_diameter: 10,
      outside_diameter: 14,
      pitch: 4,
    },
  ];

  getAllSprockets(): Promise<SprocketEntity[]> {
    return Promise.resolve(this.sprockets);
  }

  getSprocketById(id: string): Promise<SprocketEntity | null> {
    const sprocket = this.sprockets.find(sprocket => sprocket.id === id);
    return Promise.resolve(sprocket || null);
  }

  createSprocket(sprocket: SprocketEntity): Promise<SprocketEntity> {
    const newSprocket = {
      ...sprocket,
      id: new Types.ObjectId().toString(),
    };
    this.sprockets.push(newSprocket);
    return Promise.resolve(newSprocket);
  }
}

