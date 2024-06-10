import { Container } from '@tsclean/core';
import { SprocketController } from '@/infrastructure/entry-points/api/sprocket-controller';
import { adapters, services } from '@/infrastructure/driven-adapters/providers';
import { FactoryController } from '@/infrastructure/entry-points/api/factory-controller';

@Container({
  controllers: [SprocketController, FactoryController],
  providers: [...adapters, ...services]
})
export class AppContainer {}
