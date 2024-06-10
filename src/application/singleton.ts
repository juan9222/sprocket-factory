import { MongoConfiguration } from './config/mongoose-instance';

/** This array has all the singleton instances of the application */
export const singletonInitializers: Array<() => Promise<void>> = [
  async () => {
    const mongoConfig = MongoConfiguration.getInstance();
    await mongoConfig.managerConnectionMongo();
  }
];
