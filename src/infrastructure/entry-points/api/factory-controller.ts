import { Mapping, Get, Param, Adapter, HttpException, HttpStatus } from '@tsclean/core';
import { IFactoryService, FACTORY_SERVICE } from '@/domain/use-cases/factory-service';
import { FactoryEntity } from '@/domain/entities/factory';
import { Types } from 'mongoose';

@Mapping('api/v1/factories')
export class FactoryController {
  constructor(
    @Adapter(FACTORY_SERVICE)
    private readonly factoryService: IFactoryService
  ) {}

    /**
   * @swagger
   * /api/v1/factories/{id}:
   *   get:
   *     summary: Get factory data by ID
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         schema:
   *           type: string
   *         description: The factory ID
   *     responses:
   *       200:
   *         description: Success
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/Factory'
   *       400:
   *         description: Invalid ID format
   *       404:
   *         description: Factory not found
   */
  @Get(':id')
  async getFactoryById(@Param('id') id: string): Promise<FactoryEntity | null> {
    if (!Types.ObjectId.isValid(id)) {
      throw new HttpException('Invalid ID format', HttpStatus.BAD_REQUEST);
    }
    const factory = await this.factoryService.getFactoryById(id);
    if (!factory) {
      throw new HttpException('Factory not found', HttpStatus.NOT_FOUND);
    }
    return factory;
  }

   /**
   * @swagger
   * /api/v1/factories:
   *   get:
   *     summary: Get all factory data
   *     responses:
   *       200:
   *         description: Success
   *         content:
   *           application/json:
   *             schema:
   *               type: array
   *               items:
   *                 $ref: '#/components/schemas/Factory'
   */
  @Get()
  async getAllFactories(): Promise<FactoryEntity[]> {
    return this.factoryService.getAllFactories();
  }
}
