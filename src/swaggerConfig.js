import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Sprocket Factory API',
      version: '1.0.0',
      description: 'API documentation for the Sprocket Factory project',
    },
    components: {
      schemas: {
        Factory: {
          type: 'object',
          properties: {
            id: {
              type: 'string',
              description: 'The factory ID',
            },
            factory: {
              type: 'object',
              properties: {
                chart_data: {
                  type: 'object',
                  properties: {
                    sprocket_production_actual: {
                      type: 'array',
                      items: {
                        type: 'number',
                      },
                    },
                    sprocket_production_goal: {
                      type: 'array',
                      items: {
                        type: 'number',
                      },
                    },
                    time: {
                      type: 'array',
                      items: {
                        type: 'number',
                      },
                    },
                  },
                },
              },
            },
          },
        },
        Sprocket: {
          type: 'object',
          properties: {
            id: {
              type: 'string',
              description: 'The sprocket ID',
            },
            teeth: {
              type: 'number',
              description: 'Number of teeth',
            },
            pitch_diameter: {
              type: 'number',
              description: 'Pitch diameter',
            },
            outside_diameter: {
              type: 'number',
              description: 'Outside diameter',
            },
            pitch: {
              type: 'number',
              description: 'Pitch',
            },
          },
        },
      },
    },
  },
  apis: ['./src/infrastructure/entry-points/api/*.ts'], // Path to the API docs
};

const swaggerSpec = swaggerJSDoc(options);

export const setupSwagger = (app) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};
