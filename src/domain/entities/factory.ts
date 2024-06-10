export type FactoryEntity = {
    id: string;
    factory: {
      chart_data: {
        sprocket_production_actual: number[];
        sprocket_production_goal: number[];
        time: number[];
      };
    };
  };
  

export type AddFactoryParams = Omit<FactoryEntity, 'id'>
