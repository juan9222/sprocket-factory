import { SprocketController } from './sprocket-controller';
import { SprocketServiceMock } from '@/domain/use-cases/mocks/sprock-service-mock';
import { SprocketEntity } from '@/domain/entities/sprocket';

describe('SprocketController', () => {
  let sprocketController: SprocketController;
  let sprocketServiceMock: SprocketServiceMock;

  beforeEach(() => {
    sprocketServiceMock = new SprocketServiceMock();
    sprocketController = new SprocketController(sprocketServiceMock);
  });

  it('should return all sprockets', async () => {
    const result: SprocketEntity[] = await sprocketController.getAllSprockets();
    expect(result).toHaveLength(2);
    expect(result[0].id).toBe('1');
    expect(result[1].id).toBe('2');
  });
});
