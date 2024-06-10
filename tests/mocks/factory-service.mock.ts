import { IFactoryService } from '@/domain/use-cases/factory-service';
import { FactoryEntity } from '@/domain/entities/factory';

export class FactoryServiceMock implements IFactoryService {
  private factories: FactoryEntity[] = [
    {
      id: '666775ce27064635c04ef1ee',
      factory: {
        chart_data: {
          sprocket_production_actual: [32, 29, 31],
          sprocket_production_goal: [32, 30, 31],
          time: [1611194818, 1611194878, 1611194938],
        },
      },
    },
    {
      id: '666775cefbd8abda8535d245',
      factory: {
        chart_data: {
          sprocket_production_actual: [32, 28, 30],
          sprocket_production_goal: [32, 30, 31],
          time: [1611194818, 1611194878, 1611194938],
        },
      },
    },
  ];

  getAllFactories(): Promise<FactoryEntity[]> {
    return Promise.resolve(this.factories);
  }

  getFactoryById(id: string): Promise<FactoryEntity | null> {
    const factory = this.factories.find(factory => factory.id === id);
    return Promise.resolve(factory || null);
  }
}
