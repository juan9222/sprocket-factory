import { ISprocketService } from '@/domain/use-cases/sprocket-service';
import { SprocketEntity } from '@/domain/entities/sprocket';

export class SprocketServiceMock implements ISprocketService {
  getAllSprockets(): Promise<SprocketEntity[]> {
    return Promise.resolve([
      {
        id: '1',
        teeth: 10,
        pitch_diameter: 5,
        outside_diameter: 7,
        pitch: 2,
      },
      {
        id: '2',
        teeth: 20,
        pitch_diameter: 10,
        outside_diameter: 14,
        pitch: 4,
      },
    ]);
  }
}
