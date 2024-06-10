import 'tsconfig-paths/register';
import mongoose from 'mongoose';
import { readFileSync } from 'fs';
import path from 'path';
import { SprocketModel } from '@/infrastructure/driven-adapters/adapters/orm/mongoose/models/sprocket';
import { FactoryModel } from '@/infrastructure/driven-adapters/adapters/orm/mongoose/models/factory';
import { MONGODB_URI } from '@/application/config/environment';

const seedDatabase = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');

    const sprocketsData = JSON.parse(readFileSync(path.join(__dirname, 'seed_sprocket_types.json'), 'utf-8'));
    const factoriesData = JSON.parse(readFileSync(path.join(__dirname, 'seed_factory_data.json'), 'utf-8'));

    await SprocketModel.deleteMany({});
    await FactoryModel.deleteMany({});

    await SprocketModel.insertMany(sprocketsData.sprockets);
    await FactoryModel.insertMany(factoriesData.factories);

    console.log('Database seeded successfully');
    mongoose.connection.close();
  } catch (error) {
    console.error('Error seeding database:', error);
    mongoose.connection.close();
  }
};

seedDatabase();
