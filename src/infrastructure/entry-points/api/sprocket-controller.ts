import { Mapping, Get, Post, Put, Body, Param, Adapter, HttpException, HttpStatus } from '@tsclean/core';
import { ISprocketService, SPROCKET_SERVICE } from '@/domain/use-cases/sprocket-service';
import { SprocketEntity } from '@/domain/entities/sprocket';
import { Types } from 'mongoose';

@Mapping('api/v1/sprockets')
export class SprocketController {
  constructor(
    @Adapter(SPROCKET_SERVICE)
    private readonly sprocketService: ISprocketService
  ) {}
  /**
   * @swagger
   * /api/v1/sprockets/{id}:
   *   get:
   *     summary: Get sprocket by ID
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         schema:
   *           type: string
   *         description: The sprocket ID
   *     responses:
   *       200:
   *         description: Success
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/Sprocket'
   *       400:
   *         description: Invalid ID format
   *       404:
   *         description: Sprocket not found
   */
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

    /**
   * @swagger
   * /api/v1/sprockets:
   *   get:
   *     summary: Get all sprockets
   *     responses:
   *       200:
   *         description: Success
   *         content:
   *           application/json:
   *             schema:
   *               type: array
   *               items:
   *                 $ref: '#/components/schemas/Sprocket'
   */
  @Get()
  async getAllSprockets(): Promise<SprocketEntity[]> {
    return this.sprocketService.getAllSprockets();
  }

  /**
   * @swagger
   * /api/v1/sprockets:
   *   post:
   *     summary: Create a new sprocket
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/Sprocket'
   *     responses:
   *       201:
   *         description: Sprocket created
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/Sprocket'
   */
  @Post()
  async createSprocket(@Body() sprocket: SprocketEntity): Promise<SprocketEntity> {
    return this.sprocketService.createSprocket(sprocket);
  }

  /**
   * @swagger
   * /api/v1/sprockets/{id}:
   *   put:
   *     summary: Update a sprocket by ID
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         schema:
   *           type: string
   *         description: The sprocket ID
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/Sprocket'
   *     responses:
   *       200:
   *         description: Sprocket updated
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/Sprocket'
   *       400:
   *         description: Invalid ID format
   *       404:
   *         description: Sprocket not found
   */
  @Put(':id')
  async updateSprocketById(@Param('id') id: string, @Body() sprocket: Partial<SprocketEntity>): Promise<SprocketEntity | null> {
    if (!Types.ObjectId.isValid(id)) {
      throw new HttpException('Invalid ID format', HttpStatus.BAD_REQUEST);
    }
    return this.sprocketService.updateSprocketById(id, sprocket);
  }
}
