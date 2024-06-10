import { SprocketServiceMock } from '../mocks/sprocket-service.mock';

describe('SprocketService', () => {
  let sprocketService: SprocketServiceMock;

  beforeEach(() => {
    sprocketService = new SprocketServiceMock();
  });

  it('should return a sprocket by id', async () => {
    const validId = '666775cefbd8abda8535d245';
    const sprocket = await sprocketService.getSprocketById(validId);
    expect(sprocket).toBeTruthy();
    expect(sprocket?.id).toBe(validId);
  });
});
