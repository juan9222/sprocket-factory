import { IFactoryRepository } from '@/domain/entities/contracts/factory-repository';
import { FactoryEntity } from '@/domain/entities/factory';
import { FactoryModel } from './models/factory';
import { Types } from 'mongoose';

export class FactoryMongooseRepositoryAdapter implements IFactoryRepository {
  async getFactoryById(id: string): Promise<FactoryEntity | null> {
    const objectId = new Types.ObjectId(id);
    const factory = await FactoryModel.findById(objectId).lean().exec();
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

  async getAllFactories(): Promise<FactoryEntity[]> {
    const factories = await FactoryModel.find().lean().exec();
    return factories.map(factory => ({
      ...factory,
      id: factory._id.toString(),
      factory: {
        chart_data: {
          sprocket_production_actual: factory.factory?.chart_data?.sprocket_production_actual ?? [],
          sprocket_production_goal: factory.factory?.chart_data?.sprocket_production_goal ?? [],
          time: factory.factory?.chart_data?.time ?? []
        }
      }
    }));
  }
}
