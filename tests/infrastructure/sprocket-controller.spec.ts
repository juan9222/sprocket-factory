import { SprocketController } from '@/infrastructure/entry-points/api/sprocket-controller';
import { SprocketServiceMock } from '../mocks/sprocket-service.mock';
import { SprocketEntity } from '@/domain/entities/sprocket';
import { Types } from 'mongoose';

describe('SprocketController', () => {
  let sprocketController: SprocketController;
  let sprocketService: SprocketServiceMock;

  beforeEach(() => {
    sprocketService = new SprocketServiceMock();
    sprocketController = new SprocketController(sprocketService);
  });

  it('should return a sprocket by id', async () => {
    const validId = '666775cefbd8abda8535d245';
    const sprocket = await sprocketController.getSprocketById(validId);
    expect(sprocket).toEqual({
      id: validId,
      teeth: 10,
      pitch_diameter: 5,
      outside_diameter: 7,
      pitch: 2,
    });
  });

  it('should return an error if sprocket not found', async () => {
    const invalidId = new Types.ObjectId().toString();
    await expect(sprocketController.getSprocketById(invalidId)).rejects.toThrowError('Sprocket not found');
  });

  it('should return an error if invalid ID format', async () => {
    const invalidId = 'invalidId';
    await expect(sprocketController.getSprocketById(invalidId)).rejects.toThrowError('Invalid ID format');
  });

  it('should create a new sprocket', async () => {
    const newSprocket: SprocketEntity = {
      id: '',
      teeth: 15,
      pitch_diameter: 8,
      outside_diameter: 10,
      pitch: 3,
    };
    const createdSprocket = await sprocketController.createSprocket(newSprocket);
    expect(createdSprocket).toEqual({
      ...newSprocket,
      id: createdSprocket.id,
    });
  });
});
