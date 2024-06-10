import { FactoryServiceMock } from '../mocks/factory-service.mock';

describe('FactoryService', () => {
  let factoryService: FactoryServiceMock;

  beforeEach(() => {
    factoryService = new FactoryServiceMock();
  });

  it('should return a factory by id', async () => {
    const validId = '666775ce27064635c04ef1ee';
    const factory = await factoryService.getFactoryById(validId);
    expect(factory).toBeTruthy();
    expect(factory?.id).toBe(validId);
  });
});
