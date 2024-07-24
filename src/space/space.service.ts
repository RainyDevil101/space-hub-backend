import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateSpaceDto } from './dto/create-space.dto';
import { UpdateSpaceDto } from './dto/update-space.dto';
import { Space } from './entities/space.entity';

@Injectable()
export class SpaceService {
  constructor(
    @InjectModel(Space.name) private readonly spaceModel: Model<Space>,
  ) {}

  async create(createSpaceDto: CreateSpaceDto): Promise<Space> {
    try {
      const newSpace = new this.spaceModel(createSpaceDto);
      return await newSpace.save();
    } catch (error) {
      console.log(error)
      throw new BadRequestException('Error creating the space', error);
    }
  }

  async findAll(): Promise<Space[]> {
    try {
      return await this.spaceModel.find().exec();
    } catch (error) {
      throw new BadRequestException('Error retrieving spaces', error);
    }
  }

  async findOne(id: string): Promise<Space> {
    try {
      const space = await this.spaceModel.findById(id).exec();
      if (!space) {
        throw new NotFoundException(`Space with ID ${id} not found`);
      }
      return space;
    } catch (error) {
      throw new NotFoundException(`Error finding space with ID ${id}`, error);
    }
  }

  async update(id: string, updateSpaceDto: UpdateSpaceDto): Promise<Space> {
    try {
      const updatedSpace = await this.spaceModel.findByIdAndUpdate(id, updateSpaceDto, { new: true }).exec();
      if (!updatedSpace) {
        throw new NotFoundException(`Space with ID ${id} not found`);
      }
      return updatedSpace;
    } catch (error) {
      throw new BadRequestException('Error updating the space', error);
    }
  }

  async remove(id: string): Promise<void> {
    try {
      const deletedSpace = await this.spaceModel.findByIdAndDelete(id).exec();
      if (!deletedSpace) {
        throw new NotFoundException(`Space with ID ${id} not found`);
      }
    } catch (error) {
      throw new BadRequestException('Error deleting the space', error);
    }
  }
}
