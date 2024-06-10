import { IFactoryRepository } from '@/domain/entities/contracts/factory-repository';
import { FactoryEntity } from '@/domain/entities/factory';
import { FactoryModel } from './models/factory';

export class FactoryMongooseRepositoryAdapter implements IFactoryRepository {
  async getFactoryById(id: string): Promise<FactoryEntity | null> {
    const factory = await FactoryModel.findById(id).lean().exec();
    if (!factory || !factory.factory || !factory.factory.chart_data) {
      return null;
    }
    return {
      id: factory._id.toString(),
      factory: {
        chart_data: {
          sprocket_production_actual: factory.factory.chart_data.sprocket_production_actual,
          sprocket_production_goal: factory.factory.chart_data.sprocket_production_goal,
          time: factory.factory.chart_data.time
        }
      }
    };
  }
}
