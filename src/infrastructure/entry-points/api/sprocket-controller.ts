import { Mapping, Get, Adapter } from '@tsclean/core';
import { ISprocketService, SPROCKET_SERVICE } from '@/domain/use-cases/sprocket-service';
import { SprocketEntity } from '@/domain/entities/sprocket';

@Mapping('api/v1/sprockets')
export class SprocketController {
  constructor(
    @Adapter(SPROCKET_SERVICE) private readonly sprocketService: ISprocketService
  ) {}

  @Get()
  async getAllSprockets(): Promise<SprocketEntity[]> {
    return this.sprocketService.getAllSprockets();
  }
}
