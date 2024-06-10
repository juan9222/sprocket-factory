import { Mapping, Get, Post, Body, Param, Adapter, HttpException, HttpStatus } from '@tsclean/core';
import { ISprocketService, SPROCKET_SERVICE } from '@/domain/use-cases/sprocket-service';
import { SprocketEntity } from '@/domain/entities/sprocket';
import { Types } from 'mongoose';

@Mapping('api/v1/sprockets')
export class SprocketController {
  constructor(
    @Adapter(SPROCKET_SERVICE)
    private readonly sprocketService: ISprocketService
  ) {}

  @Get(':id')
  async getSprocketById(@Param('id') id: string): Promise<SprocketEntity | null> {
    if (!Types.ObjectId.isValid(id)) {
      throw new HttpException('Invalid ID format', HttpStatus.BAD_REQUEST);
    }
    const sprocket = await this.sprocketService.getSprocketById(id);
    if (!sprocket) {
      throw new HttpException('Sprocket not found', HttpStatus.NOT_FOUND);
    }
    return sprocket;
  }

  @Get()
  async getAllSprockets(): Promise<SprocketEntity[]> {
    return this.sprocketService.getAllSprockets();
  }

  @Post()
  async createSprocket(@Body() sprocket: SprocketEntity): Promise<SprocketEntity> {
    return this.sprocketService.createSprocket(sprocket);
  }
}
