import { Service, Adapter } from '@tsclean/core';
import { ISprocketService } from '@/domain/use-cases/sprocket-service';
import { SprocketEntity } from '@/domain/entities/sprocket';
import { ISprocketRepository, SPROCKET_REPOSITORY } from '@/domain/entities/contracts/sprocket-repository';

@Service()
export class SprocketServiceImpl implements ISprocketService {
  constructor(
    @Adapter(SPROCKET_REPOSITORY) private readonly sprocketRepository: ISprocketRepository
  ) {}

  async getAllSprockets(): Promise<SprocketEntity[]> {
    return this.sprocketRepository.getAllSprockets();
  }

  async getSprocketById(id: string): Promise<SprocketEntity | null> {
    return this.sprocketRepository.getSprocketById(id);
  }

  async createSprocket(sprocket: SprocketEntity): Promise<SprocketEntity> {
    return this.sprocketRepository.createSprocket(sprocket);
  }

  async updateSprocketById(id: string, sprocket: Partial<SprocketEntity>): Promise<SprocketEntity | null> {
    return this.sprocketRepository.updateSprocketById(id, sprocket);
  }
}
