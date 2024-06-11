import 'module-alias/register';
import helmet from 'helmet';
import { StartProjectInit } from '@tsclean/core';
import { AppContainer } from '@/application/app';
import { PORT } from '@/application/config/environment';
import { singletonInitializers } from '@/application/singleton';
import { setupSwagger } from './swaggerConfig';

async function init(): Promise<void> {
  /** Initialize singleton instances */
  for (const initFn of singletonInitializers) {
    await initFn();
  }

  const app = await StartProjectInit.create(AppContainer);
  app.use(helmet());
  setupSwagger(app);
  await app.listen(PORT, () => console.log(`Running on port: ${PORT}`));
}

void init().catch(err => {
  console.error(err);
  process.exit(1);
});
