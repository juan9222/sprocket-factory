export type SprocketEntity = {
    id?: string;
    teeth: number;
    pitch_diameter: number;
    outside_diameter: number;
    pitch: number;
  };
  
  export type AddSprocketParams = Omit<SprocketEntity, 'id'>;
  