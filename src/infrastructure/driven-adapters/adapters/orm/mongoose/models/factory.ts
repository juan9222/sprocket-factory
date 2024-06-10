import { Schema, model } from 'mongoose';

const FactorySchema = new Schema({
  factory: {
    chart_data: {
      sprocket_production_actual: [Number],
      sprocket_production_goal: [Number],
      time: [Number],
    },
  },
});

export const FactoryModel = model('Factory', FactorySchema);
