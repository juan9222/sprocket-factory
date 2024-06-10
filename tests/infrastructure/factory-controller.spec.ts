import { FactoryController } from '@/infrastructure/entry-points/api/factory-controller';
import { FactoryServiceMock } from '../mocks/factory-service.mock';
import { Types } from 'mongoose';

describe('FactoryController', () => {
  let factoryController: FactoryController;
  let factoryService: FactoryServiceMock;

  beforeEach(() => {
    factoryService = new FactoryServiceMock();
    factoryController = new FactoryController(factoryService);
  });

  it('should return factory data for a given id', async () => {
    const validId = '666775ce27064635c04ef1ee';
    const factory = await factoryController.getFactoryById(validId);
    expect(factory).toEqual({
      id: validId,
      factory: {
        chart_data: {
          sprocket_production_actual: [32, 29, 31],
          sprocket_production_goal: [32, 30, 31],
          time: [1611194818, 1611194878, 1611194938],
        },
      },
    });
  });

  it('should return an error if factory not found', async () => {
    const invalidId = new Types.ObjectId().toString();
    await expect(factoryController.getFactoryById(invalidId)).rejects.toThrowError('Factory not found');
  });

  it('should return an error if invalid ID format', async () => {
    const invalidId = 'invalidId';
    await expect(factoryController.getFactoryById(invalidId)).rejects.toThrowError('Invalid ID format');
  });
});
