import { Container } from '@tsclean/core';
import { SprocketController } from '@/infrastructure/entry-points/api/sprocket-controller';
import { adapters, services } from '@/infrastructure/driven-adapters/providers';

@Container({
  controllers: [SprocketController],
  providers: [...adapters, ...services]
})
export class AppContainer {}
