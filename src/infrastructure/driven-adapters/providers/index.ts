import { SPROCKET_REPOSITORY } from '@/domain/entities/contracts/sprocket-repository';
import { SprocketMongooseRepositoryAdapter } from '@/infrastructure/driven-adapters/adapters/orm/mongoose/sprocket-mongoose-repository-adapter.ts';
import { SPROCKET_SERVICE } from '@/domain/use-cases/sprocket-service';
import { SprocketServiceImpl } from '@/domain/use-cases/impl/sprocket-service-impl';

import { FACTORY_REPOSITORY } from '@/domain/entities/contracts/factory-repository';
import { FactoryMongooseRepositoryAdapter } from '@/infrastructure/driven-adapters/adapters/orm/mongoose/factory-mongoose-repository-adapter.ts';
import { FACTORY_SERVICE } from '@/domain/use-cases/factory-service';
import { FactoryServiceImpl } from '@/domain/use-cases/impl/factory-service-impl';

export const adapters = [
  {
    provide: SPROCKET_REPOSITORY,
    useClass: SprocketMongooseRepositoryAdapter
  },
  {
    provide: FACTORY_REPOSITORY,
    useClass: FactoryMongooseRepositoryAdapter
  }
];

export const services = [
  {
    provide: SPROCKET_SERVICE,
    useClass: SprocketServiceImpl
  },
  {
    provide: FACTORY_SERVICE,
    useClass: FactoryServiceImpl
  }
];
