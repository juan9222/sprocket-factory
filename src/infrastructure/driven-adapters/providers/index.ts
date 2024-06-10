import { SPROCKET_REPOSITORY } from '@/domain/entities/contracts/sprocket-repository';
import { SprocketMongooseRepositoryAdapter } from '@/infrastructure/driven-adapters/adapters/orm/mongoose/sprocket-mongoose-repository-adapter.ts';
import { SPROCKET_SERVICE } from '@/domain/use-cases/sprocket-service';
import { SprocketServiceImpl } from '@/domain/use-cases/impl/sprocket-service-impl';

export const adapters = [
  {
    provide: SPROCKET_REPOSITORY,
    useClass: SprocketMongooseRepositoryAdapter
  }
];

export const services = [
  {
    provide: SPROCKET_SERVICE,
    useClass: SprocketServiceImpl
  }
];
