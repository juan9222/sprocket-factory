import { SprocketEntity } from '@/domain/entities/sprocket';
import { model, Schema } from 'mongoose';

const sprocketSchema = new Schema<SprocketEntity>({
  teeth: { type: Number, required: true },
  pitch_diameter: { type: Number, required: true },
  outside_diameter: { type: Number, required: true },
  pitch: { type: Number, required: true }
});

export const SprocketModel = model<SprocketEntity>('Sprocket', sprocketSchema);
