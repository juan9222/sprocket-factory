import { FactoryController } from './factory-controller';
import { IFactoryService } from '@/domain/use-cases/factory-service';
import { FactoryEntity } from '@/domain/entities/factory';

describe('FactoryController', () => {
  let factoryController: FactoryController;
  let factoryServiceMock: Partial<IFactoryService>;

  beforeEach(() => {
    factoryServiceMock = {
      getFactoryById: jest.fn().mockResolvedValue({
        id: '1',
        factory: {
          chart_data: {
            sprocket_production_actual: [32, 29],
            sprocket_production_goal: [32, 30],
            time: [1611194818, 1611194878]
          }
        }
      } as FactoryEntity)
    };
    factoryController = new FactoryController(factoryServiceMock as IFactoryService);
  });

  it('should return factory data for a given id', async () => {
    const factory = await factoryController.getFactoryById('1');
    expect(factory).toEqual({
      id: '1',
      factory: {
        chart_data: {
          sprocket_production_actual: [32, 29],
          sprocket_production_goal: [32, 30],
          time: [1611194818, 1611194878]
        }
      }
    });
  });

  it('should return null if factory not found', async () => {
    jest.spyOn(factoryServiceMock, 'getFactoryById').mockResolvedValueOnce(null);
    const factory = await factoryController.getFactoryById('2');
    expect(factory).toBeNull();
  });
});
